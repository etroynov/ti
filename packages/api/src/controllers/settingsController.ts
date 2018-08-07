/**
 * Settings controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle settings ( create, update and etc )
 *
 *
 * Module dependencies
 */

import { send, json } from 'micro';
import { model } from 'mongoose';

import { IRequest, IResponse, IRequestJson } from '../../interfaces';

import SettingsModel from '../model/Settings';

/*!
 * Register model
 */

const Settings = model('Settings', SettingsModel);

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
  const data = await json(req) as IRequestJson;
  const { _id } = data;

  const settings = await Settings.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, settings);
};

const destroy = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;
  const { _id } = data;

  await Settings.remove(_id);

  return send(res, 200);
};

export default { index, store, update, destroy };
