const db = require("../db-config");
const mappers = require("../helpers/mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getProjectTasks,
};

function get(id) {
  let query = db("projects as p");

  if (id) {
    query.where("p.id", id).first();

    const promises = [query, this.getTasks(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [project, tasks] = results;

      if (project) {
        project.tasks = tasks;

        return mappers.projectToBody(project);
      } else {
        return null;
      }
    });
    } else {
    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }
}

function insert(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db("projects")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db("projects")
    .where("id", id)
    .del();
}

function getProjectTasks(projectId) {
  return db("tasks")
    .where("project_id", projectId)
    .then(tasks => tasks.map(task => mappers.taskToBody(task)));
}
