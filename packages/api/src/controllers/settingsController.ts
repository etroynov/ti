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

import { IRequest, IResponse } from '../../interfaces';

/*!
 * Expos
 */

const index = async (_: IRequest, res: IResponse) => {
  const settings = await Settings.find();

  return send(res, 200, settings);
};

const store = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const settings = await Settings.create(data);

  return send(res, 200, settings);
};

const update = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const { _id } = data;

  const settings = await Settings.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, settings);
};

const destroy = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const { _id } = data;

  await Settings.remove(_id);

  return send(res, 200);
};

export default { index, store, update, destroy };
