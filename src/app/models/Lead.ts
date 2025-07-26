import mongoose from 'mongoose';

// בדיקה אם המודל כבר קיים
const Lead = mongoose.models.Lead || mongoose.model('Lead', new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'שם הוא שדה חובה'],
  },
  phone: {
    type: String,
    required: [true, 'טלפון הוא שדה חובה'],
  },
  email: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  timestamp: {
    type: Number,
    default: () => Date.now(),
  },
}));

export default Lead; 