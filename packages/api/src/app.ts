/*!
 * Dependencies
 */

import cors from 'micro-cors';
import compose from 'micro-compose';
import mongoose from 'mongoose';

import { send } from 'micro';
import { router, get, post } from 'microrouter';

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
  get('/pages',            pagesController.index),
  get('/pages/:slug',      pagesController.show),
  post('/pages/create',    pagesController.create),
  post('/pages/update',    pagesController.update),
  post('/pages/delete',    pagesController.delete),

  /** COURSES **/
  get('/courses',          coursesController.index),
  get('/courses/:id',      coursesController.show),
  get('/courses/slug/:slug', coursesController.showBySlug),
  post('/courses/create',  coursesController.create),
  post('/courses/update',  coursesController.update),
  post('/courses/delete',  coursesController.delete),

  /** LESSONS **/
  get('/lessons',          lessonsController.index),
  get('/lessons/:id',      lessonsController.show),
  post('/lessons/create',  lessonsController.create),
  post('/lessons/update',  lessonsController.update),
  post('/lessons/delete',  lessonsController.delete),

  /** 404 **/
  get('/*', notfound),
));
