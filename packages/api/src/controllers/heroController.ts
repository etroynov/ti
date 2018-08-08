/**
 * Hero controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle hero ( create, update and etc )
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

import HeroSchema from '../models/Hero';

const Hero = model('Hero', HeroSchema);

/*!
 * Expo
 */

export const index = async (_:IRequest, res: IResponse) => {
  const heroes = await Hero.find();

  return send(res, 200, heroes);
};

export const show = async (req: IRequest, res: IResponse) => {
  try {
    const { slug } = req.params;
    const hero = await Hero.findOne({ slug });

    return send(res, 200, hero);
  } catch (e) {
    return send(res, 500, e);
  }
};

export const store = async (req: IRequest, res: IResponse) => {
  const data = await json(req);
  const hero = await Hero.create(data);

  return send(res, 200, hero);
};

export const update = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;
  const { _id } = data;

  const hero = await Hero.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, hero);
};

export const destroy = async (req: IRequest, res: IResponse) => {
  const data = await json(req) as IRequestJson;

  await Hero.remove(data);

  return send(res, 200);
};
