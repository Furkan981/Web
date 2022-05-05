module.exports = {


  friendlyName: 'Edit',


  description: '',


  inputs: {
    id: {
      description: 'The meal of the user to look up.',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/meal/edit'
    },
    notFound: {
      description: 'No meal with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function ({id}) {

    let meal = await Meal.findOne({ id: id });
    if (!meal) { throw 'notFound'; }
    return {
      meal: meal
    };
  }
};
