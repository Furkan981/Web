module.exports = {


  friendlyName: 'Create',


  description: 'Create camp.',


  inputs: {
    id: {
      description: 'The id of the camp.',
      type: 'number',
      required: true
    },
    name: {
      description: 'The name of the camp.',
      type: 'string',
      required: true
    },
    description: {
      description: 'The description of the camp.',
      type: 'string',
    },
    price: {
      description: 'The price of the camp.',
      type: 'number',
      required: false
    },
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/camp/show'
    },
  },


  fn: async function (inputs) {
    sails.log.debug("Update camp....")
    sails.log(inputs);
    let camp = await Camp.updateOne({id: inputs.id}).set(inputs);
    sails.log.debug("Updated camp....")
    sails.log.debug(camp)
    if (!camp) { throw 'notFound'; }
    return {
      message: "Successfully created.",
      camp: camp
    };
  }


};
