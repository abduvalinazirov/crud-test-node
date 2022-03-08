const StudentController = require("../controllers/StudentController");

const routes = require("express").Router();

routes
  .route("/student")
  .get(StudentController.getStudent)
  .post(StudentController.postStudent);
routes
  .route("/student/:id")
  .delete(StudentController.deleteStudent)
  .put(StudentController.updateStudent);

module.exports = routes;