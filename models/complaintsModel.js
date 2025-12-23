const mongoose = require("mongoose");
const schema = mongoose;

const complaintSchema =
  ({
    name: String,
    email: String,
    title: String,
    description: String,
    category: String,
    priority: { type: String, enum: ["low", "medium", "high"] },
    status: { type: String, enum: ["pending", "in-progress", "resolved"] },
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  },
  {
  });

const Complaints = mongoose.model("Complaints", complaintSchema);

module.exports = Complaints;
