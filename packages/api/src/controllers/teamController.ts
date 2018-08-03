/**
 * Lessons controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle lessons ( create, update and etc )
 *
 *
 * Module dependencies
 */

import { send, json } from 'micro';
import mongoose from 'mongoose';

const Lesson = mongoose.model('Lesson');
const Course = mongoose.model('Course');

/*!
 * Expos
 */

const index = async (req, res) => {
  const lessons = await Lesson.find();

  return send(res, 200, lessons);
};

const show = async (req, res) => {
  try {
    const lesson = await Lesson.findOne({ _id: req.params.id });

    return send(res, 200, lesson);
  } catch (e) {
    return send(res, 500, e);
  }
}

const store = async (req, res) => {
  const data = await json(req);
  const lesson = await Lesson.create(data);

  course.lessons.push(lesson._id);
  await course.save();

  return send(res, 200, lesson);
};

const update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const lesson = await Lesson.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, lesson);
};

const destroy = async (req, res) => {
  const data = await json(req);
  const lesson = await Lesson.remove(data);

  return send(res, 200);
};

export default { index, show, store, update, destroy };
