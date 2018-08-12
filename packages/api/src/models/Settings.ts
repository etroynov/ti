/**
 * Settings model
 *
 * @module       :: model
 * @description  :: Represent settings in database
 *
 *
 * Module dependencies
 */

import { Schema } from 'mongoose';

/**
 * Schema annotation
 */

export default new Schema({
  key: String,
  value: String,
});
