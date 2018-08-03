/*!
 * Dependencies
 */

import cors from 'micro-cors';
import compose from 'micro-compose';
import mongoose from 'mongoose';

import { send } from 'micro';
import { router, get, post, patch, del } from 'microrouter';

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

const notfound = (req, res) => send(res, 404, 'You shall not passs :)');

/**
 * Expo
 */

export default compose(
  cors,
)(router(
  /** PAGES **/
  get('/players',       playerController.index),
  get('/players/:slug', playerController.show),
  post('/players',      playerController.create),
  patch('/players',     playerController.update),
  del('/players',       playerController.delete),

  /** COURSES **/
  get('/teams',          teamController.index),
  get('/teams/:id',      teamController.show),
  post('/teams/create',  teamController.create),
  patch('/teams/update', teamController.update),
  del('/teams/delete',   teamController.delete),

  /** LESSONS **/
  get('/tournaments',          tournamentController.index),
  get('/tournaments/:id',      tournamentController.show),
  post('/tournaments/create',  tournamentController.create),
  post('/tournaments/update',  tournamentController.update),
  post('/tournaments/delete',  tournamentController.delete),

  /** 404 **/
  get('/*', notfound),
));
