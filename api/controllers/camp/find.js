module.exports = {

  friendlyName: 'Find',

  description: 'Find camp.',

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
      viewTemplatePath: 'pages/camp/index'
    }
  },

  fn: async function (inputs) {
    let camps;
    if (inputs.q && inputs.q.length > 0) {
      camps = await Camp.find({
        name: {
          'contains': inputs.q
        }
      })
    } else {
      camps = await Camp.find();
    }
    sails.log.debug(camps)
    return ({ camps: camps });
  }
};
