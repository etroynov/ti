/**
 * Pages controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle pages ( create, update and etc )
 *
 *
 * Module dependencies
 */
const { send, json } = require('micro');
const mongoose = require('mongoose');

const Page = mongoose.model('Page');

/*!
 * Expo
 */

const index = async (req, res) => {
  const pages = await Page.find();

  return send(res, 200, pages);
};

const show = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });

    return send(res, 200, page);
  } catch (e) {
    return send(res, 500, e);
  }
}

const store = async (req, res) => {
  const data = await json(req);
  const page = await Page.create(data);

  return send(res, 200, page);
};

const update = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const page = await Page.findOneAndUpdate({ _id }, data, { new: true });

  return send(res, 200, page);
};

const destroy = async (req, res) => {
  const data = await json(req);
  const { _id } = data;

  const page = await Page.remove(_id);

  return send(res, 200);
};

export default { index, show, store, update, destroy };
