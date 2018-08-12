/**
 * Team model
 *
 * @module       :: model
 * @description  :: Represent team in database
 *
 *
 * Module dependencies
 */

import { Schema } from 'mongoose';

/**
 * Schema annotation
 */

export default new Schema({
  title: String,
  description: String,
  name: String,
  history: String,
  logo: String,

  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],

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
