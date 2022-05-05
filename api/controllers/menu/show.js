module.exports = {


  friendlyName: 'Show',


  description: 'Show menu.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/menu'
    },
  },

  fn: async function (inputs) {
    sails.log("Controller called for getting menu:")
    let menus = await Meal.find();
    sails.log.debug("Query result for all meals:")
    sails.log.debug(menus)
    return ( { menus: menus } );
  }
};
