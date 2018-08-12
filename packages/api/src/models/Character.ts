/**
 * Character model
 *
 * @module       :: model
 * @description  :: Represent game character in database
 *
 *
 * Module dependencies
 */

import { Schema } from 'mongoose';

/**
 * Schema annotation
 */

export default new Schema({
  name: String,
  thumb: String,
  slug: String,
});
