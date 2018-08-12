/**
 * Character controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle character ( create, update and etc )
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

import CharacterSchema from '../models/Character';

const Character = model('Character', CharacterSchema);

/*!
 * Expo
 */

export const index = async (_:IRequest, res: IResponse) => {
  const characters = await Character.find();

  return send(res, 200, characters);
};

export const show = async (req: IRequest, res: IResponse) => {
  try {
    const { slug } = req.params;
    const character = await Character.findOne({ slug });

    return send(res, 200, character);
  } catch (e) {
    return send(res, 500, e);
  }
};

export const store = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const character = await Character.create(data);

  return send(res, 200, character);
};

export const update = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;
  const { _id } = data;

  const character = await Character.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, character);
};

export const destroy = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;

  await Character.remove(data);

  return send(res, 200);
};
