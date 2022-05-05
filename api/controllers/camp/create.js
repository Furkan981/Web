module.exports = {


  friendlyName: 'Create',


  description: 'Create camping-areal.',


  inputs: {
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
      required: true
    },
    spots: {
      description: 'The amount of camping-spots.',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/camp/show'
    },
  },


  fn: async function (inputs) {
    sails.log.debug("Create new camp....")
    let camp = await Camp.create(inputs).fetch();
    sails.log.debug("New camp....")
    sails.log.debug(camp)
    if (!camp) { throw 'notFound'; }
    return {
      message: "Successfully created.",
      camp: camp
    };
  }


};
