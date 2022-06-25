/**
 * CampArealController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/camp/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create new camp....")
    let params = req.allParams();
    if (!params.name || params.name == "") {
      sails.log.debug("Vaidation error....")
      res.view('pages/camp/status', { "success": false })
    } else {
      sails.log.debug("Create new camp....")
      let camp = await Camp.create(req.allParams());
      res.redirect('/category');
    }
  },

  find: async function (req, res) {
    sails.log.debug("List all camps....")
    if (req.query.q && req.query.q.length > 0) {
      camps = await Camp.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      camps = await Camp.find();
    }
    res.view('pages/camp/camp', { camps: camps });
  },

  findOne: async function (req, res) {
    sails.log.debug("List single camp....")
    let camp = await Camp.findOne({ id: req.params.id }).populate('category');
    res.view('pages/camp/show', { camp: camp });
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single camp....")
    await Camp.destroyOne({ id: req.params.id });
    res.redirect('/camp');
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single camp....")
    let camp = await Camp.findOne({ id: req.params.id });
    res.view('pages/camp/edit', { camp: camp });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single camp....")
    let camp = await Camp.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/camp');
  }
};

