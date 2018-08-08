/**
 * Hero model
 *
 * @module       :: model
 * @description  :: Represent hero in database
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
}, { collection: 'heroes' });
