/**
 * Page model
 *
 * @module       :: model
 * @description  :: Represent Page in database
 *
 *
 * Module dependencies
 */

import mongoose from 'mongoose';
const { Schema } = mongoose;

/**
 * Expo
 */

export default new Schema({
  title: String,
  description: String,
  name: String,
  content: String,

  slug: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});
