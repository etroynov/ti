/*!
 * Dependencies
 */

import cors from 'micro-cors';
import compose from 'micro-compose';
import mongoose from 'mongoose';

import { send } from 'micro';
import { router, get, post, patch, del } from 'microrouter';

import { IRequest, IResponse } from '../interfaces';

/*!
 * DB
 */

mongoose.connect('mongodb://localhost/ti');
mongoose.Promise = global.Promise;

/*!
 * Routes
 */

import playerController from './controllers/playerController';
import teamController from './controllers/teamController';
import tournamentController from './controllers/tournamentController';

const notfound = (_: IRequest, res: IResponse) => send(res, 404, 'You shall not passs :)');

/**
 * Expo
 */

export default compose(
  cors,
)(router(
  /** PAGES **/
  get('/players',       playerController.index),
  get('/players/:slug', playerController.show),
  post('/players',      playerController.store),
  patch('/players',     playerController.update),
  del('/players',       playerController.destroy),

  /** COURSES **/
  get('/teams',          teamController.index),
  get('/teams/:id',      teamController.show),
  post('/teams/store',  teamController.store),
  patch('/teams/update', teamController.update),
  del('/teams/destroy',   teamController.destroy),

  /** TOURNAMENTS **/
  get('/tournaments',          tournamentController.index),
  get('/tournaments/:id',      tournamentController.show),
  post('/tournaments/store',  tournamentController.store),
  patch('/tournaments/update',  tournamentController.update),
  del('/tournaments/destroy',  tournamentController.destroy),

  /** 404 **/
  get('/*', notfound),
));
