module.exports = {


  friendlyName: 'Create',


  description: 'Create meal.',


  inputs: {
    name: {
      description: 'The name of the meal.',
      type: 'string',
      required: true
    },
    description: {
      description: 'The description of the meal.',
      type: 'string',
    },
    price: {
      description: 'The price of the meal.',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/meal/show'
    },
  },


  fn: async function (inputs) {
    sails.log.debug("Create new meal....")
    let meal = await Meal.create(inputs).fetch();
    sails.log.debug("New meal....")
    sails.log.debug(meal)
    if (!meal) { throw 'notFound'; }
    return {
      message: "Successfully created.",
      meal: meal
    };
  }


};
