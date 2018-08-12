/*!
 * Dependencies
 */

import mongoose from 'mongoose';

import { send } from 'micro';
import { router, get } from 'microrouter';

import { IRequest, IResponse } from '../interfaces';

/*!
 * DB
 */

mongoose.connect('mongodb://localhost:27017/ti', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

/*!
 * Api Prefix
 */

const apiPrefix = 'v1';

/*!
 * Routes
 */

import * as playerController from './controllers/playerController';
import * as teamController from './controllers/teamController';
import * as characterController from './controllers/characterController';
// import tournamentController from './controllers/tournamentController';

const notfound = (_: IRequest, res: IResponse) => send(res, 404, 'You shall not passs :)');

/**
 * Expo
 */

export default router(
  /** PAGES **/
  get(`/${apiPrefix}/players`,       playerController.index),
  get(`/${apiPrefix}/players/:slug`, playerController.show),
  // post(`/${apiPrefix}/players`,   playerController.store),
  // patch(`/${apiPrefix}/players`,  playerController.update),
  // del(`/${apiPrefix}/players`,    playerController.destroy),

  // /** COURSES **/
  get(`/${apiPrefix}/teams`, teamController.index),
  // get('/teams/:id',       teamController.show),
  // post('/teams/store',    teamController.store),
  // patch('/teams/update',  teamController.update),
  // del('/teams/destroy',   teamController.destroy),

  // /** HERO **/
  get(`/${apiPrefix}/characters`,             characterController.index),
  get(`/${apiPrefix}/characters/:slug`,       characterController.show),
  // post('/${apiPrefix}/heroes/store',   heroController.store),
  // patch('/${apiPrefix}/heroes/update', heroController.update),
  // del('/${apiPrefix}/heroes/destroy',  heroController.destroy),

  // /** TOURNAMENTS **/
  // get('/tournaments',          tournamentController.index),
  // get('/tournaments/:id',      tournamentController.show),
  // post('/tournaments/store',   tournamentController.store),
  // patch('/tournaments/update', tournamentController.update),
  // del('/tournaments/destroy',  tournamentController.destroy),

  /** 404 **/
  get('/*', notfound),
);
