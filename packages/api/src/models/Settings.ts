/**
 * User model
 *
 * @module       :: model
 * @description  :: Represent user in database
 *
 *
 * Module dependencies
 */

import { Schema } from 'mongoose';

/**
 * Schema annotation
 */

export default new Schema({
  fio: String,

  telephone: String,

  password: String,

  email: {
    type: String,
    unique: true,
    required: true,
  },

  level: {
    type: Number,
    default: 0,
  },
});
