/**
 * Team controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle team ( create, update and etc )
 *
 *
 * Module dependencies
 */

import { model } from 'mongoose';
import { send, json } from 'micro';

import { IRequest, IResponse, IRequestJson } from '../../interfaces';

/**
 * Schema
 */

import TeamSchema from '../models/Team';

const Team = model('Team', TeamSchema);

/*!
 * Expo
 */

const index = async (_:IRequest, res: IResponse) => {
  const teams = await Team.find();

  return send(res, 200, teams);
};

const show = async (req: IRequest, res: IResponse) => {
  try {
    const team = await Team.findOne({ slug: req.params.slug });

    return send(res, 200, team);
  } catch (e) {
    return send(res, 500, e);
  }
};

const store = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const team = await Team.create(data);

  return send(res, 200, team);
};

const update = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;
  const { _id } = data;

  const team = await Team.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, team);
};

const destroy = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;

  await Team.remove(data);

  return send(res, 200);
};

export default { index, show, store, update, destroy };
