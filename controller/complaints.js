const Complaints = require("../models/complaintsModel");

exports.create = async (req, res) => {
  const data = req.body;
  console.log(data);
  const { name, email, title, description, category, priority, status } = data;

  await Complaints.create({
    name,
    email,
    title,
    description,
    category,
    priority,
    status,
  });
  res.json({
    message: "Complaint created Sucessfully",
  });
};

exports.fetchComplaints = async (req, res) => {
  const data = await Complaints.find();
  console.log(data);
  res.json(data);
};

exports.fetchComplaint = async (req, res) => {
  const id = req.params.id;
  const data = await Complaints.findById(id);
  res.json(data);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const data = req.body
  const { name, email, title, description, category, priority, status } = data;
  await Complaints.findByIdAndUpdate(id, {
    name, email, title, description, category, priority, status
  });
  res.json({
    message: "Complaint updated Sucessfully",
  });
};

exports.deleteComplaint = async (req, res) => {
  const id = req.params.id;
  await Complaints.findByIdAndDelete(id);
  res.json({
    message: "Complaint deleted Sucessfully",
  });
};
