/**
 * Settings controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle settings ( create, update and etc )
 *
 *
 * Module dependencies
 */
const { send, json } = require('micro');
const mongoose = require('mongoose');

const Settings = mongoose.model('Settings');

/*!
 * Expos
 */

const index = async (req, res) => {
  const settings = await Settings.find();

  return send(res, 200, settings);
};

const store = async (req, res) => {
  const data = await json(req);
  const settings = await Settings.create(data);

  return send(res, 200, settings);
};

const update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const settings = await Settings.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, settings);
};

const destroy = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const settings = await Settings.remove(_id);

  return send(res, 200);
};

export default { index, store, update, destroy };
