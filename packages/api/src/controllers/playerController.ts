/**
 * Player controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle players ( create, update and etc )
 *
 *
 * Module dependencies
 */

import { send, json } from 'micro';
import { model } from 'mongoose';

import { IRequest, IResponse, IRequestJson } from '../../interfaces';

import PlayerModel from '../models/Payer';

/*!
 * Register model
 */

const Player = model('Player', PlayerModel);

/*!
 * Expo
 */

export const index = async (_: IRequest, res: IResponse) => {
  try {
    const players = await Player.find();

    return send(res, 200, players);
  } catch (e) {
    return send(res, 500, e);
  }
};

export const show = async (req: IRequest, res: IResponse) => {
  try {
    const player = await Player.findOne({ slug: req.params.slug });

    if (player === null) { return send(res, 404); }

    return send(res, 200, player);
  } catch (e) {
    return send(res, 500, e);
  }
};

// export const store = async (req: IRequest, res: IResponse) => {
//   const data = await json(req);
//   const player = await Player.create(data);

//   return send(res, 200, player);
// };

// export const update = async (req: IRequest, res: IResponse) => {
//   const data = await json(req) as IRequestJson;
//   const { _id } = data;

//   const player = await Player.findOneAndUpdate({ _id }, data, { new: true });

//   return send(res, 200, player);
// };

// export const destroy = async (req: IRequest, res: IResponse) => {
//   const data = await json(req) as IRequestJson;
//   const { _id } = data;

//   await Player.remove(_id);

//   return send(res, 200);
// };
