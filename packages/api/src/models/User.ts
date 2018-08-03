/**
 * User model
 *
 * @module       :: model
 * @description  :: Represent user in database
 *
 *
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * User schema
 */

const UserSchema = new Schema({
  fio: String,
  telephone: String,
  password: String,
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  finishedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],

  payments: { type: Schema.Types.ObjectId, ref: 'Payment' },
  tests: {
    type: Array,
    default: []
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  position: String,

  level: {
    type: Number,
    default: 0
  }
});

/**
 * Register
 */

mongoose.model('User', UserSchema);
