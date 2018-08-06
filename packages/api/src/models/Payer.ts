/**
 * Player model
 *
 * @module       :: model
 * @description  :: Represent Player in database
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
  content: String,
});
