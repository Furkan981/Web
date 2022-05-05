module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy a meal.',


  inputs: {
    id: {
      description: 'The id of the meal.',
      type: 'number',
      required: true
    },
  },


  exits: {
    success: {
      responseType: 'redirect',
    },
  },


  fn: async function ({id}) {
    sails.log.debug("Destroy meal: "+id)
    let meal = await Meal.destroyOne({id: id});
    if (meal) {
       sails.log("Destroyed: "+meal); 
       return "/meal";
    } else {
      sails.log("Can not destroy: "+id);
      return "/meal";
    };
  }
};
