module.exports = {


  friendlyName: 'Create',


  description: 'Create meal.',


  inputs: {
    id: {
      description: 'The id of the meal.',
      type: 'number',
      required: true
    },
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
    sails.log.debug("Update meal....")
    sails.log(inputs);
    let meal = await Meal.updateOne({id: inputs.id}).set(inputs);
    sails.log.debug("Updated meal....")
    sails.log.debug(meal)
    if (!meal) { throw 'notFound'; }
    return {
      message: "Successfully created.",
      meal: meal
    };
  }


};
