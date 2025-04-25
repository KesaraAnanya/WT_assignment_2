const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentID: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  dob: { type: Date, required: true },
  enrollmentYear: { type: Number, required: true },
  department: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Student', StudentSchema);
