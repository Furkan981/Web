module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy a camp.',


  inputs: {
    id: {
      description: 'The id of the camp.',
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
    sails.log.debug("Destroy camp: "+id)
    let camp = await Camp.destroyOne({id: id});
    if (camp) {
       sails.log("Destroyed: "+camp); 
       return "/camp";
    } else {
      sails.log("Can not destroy (not found): "+id);
      return "/camp";
    };
  }
};
