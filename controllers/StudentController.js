const StudentsModel = require("../models/StudentsModel");

const StudentController = {
  getStudent: async (req, res) => {
    try {
      const students = await StudentsModel.find();
      res.json({ status: "success", msg: students });
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  postStudent: async (req, res) => {
    try {
      const { name, username, phonenumber } = req.body;
      const currentStudent = await StudentsModel.findOne({ username });
      if (currentStudent) {
        res.status(422).json({ err: "Ushbu user allaqachon mavjud" });
      } else {
        const student = new StudentsModel({ name, username, phonenumber });
        await student.save();
        res.json({ status: "Created", msg: student });
      }
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  deleteStudent: async (req, res) => {
    try {
      await StudentsModel.findByIdAndDelete(req.params.id);
      res.json({ status: "Delete Student" });
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { name, username, phonenumber } = req.body;
      const currentStudent = await StudentsModel.findOne({ username });
      if (currentStudent) return res.status(422).json({ err: "Ushbu user allaqachon mavjud" });
      await StudentsModel.findByIdAndUpdate(req.params.id, {
        name,
        username,
        phonenumber,
      });
      const student = await StudentsModel.findById(req.params.id);
      res.json({ status: "Updated :)", msg: student });
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
};

module.exports = StudentController;
