module.exports = {

  friendlyName: 'Find',

  description: 'Find meal.',

  inputs: {
    q: {
      description: 'The search input.',
      type: 'string',
      required: false
    }
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/meal/index'
    }
  },

  fn: async function (inputs) {
    let meals;
    if (inputs.q && inputs.q.length > 0) {
      meals = await Meal.find({
        name: {
          'contains': inputs.q
        }
      })
    } else {
      meals = await Meal.find();
    }
    sails.log.debug(meals)
    return ({ meals: meals });
  }
};
