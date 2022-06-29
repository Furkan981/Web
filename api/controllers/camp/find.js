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
      viewTemplatePath: 'pages/camp/camp'
      //viewTemplatePath: 'pages/dashboard/welcome'
    },
    redirect: {
      description: 'Dieser Nutzer ist kein Anbieter.',
      responseType: 'redirect',
  }
  },

  fn: async function (inputs) {

    if (!this.req.me.isSuperAdmin) {
      let camps;
    if (inputs.q && inputs.q.length > 0) {
      camps = await Camp.find({
        name: {
          'contains': inputs.q
        },
        vermieterId: this.req.me.id
      })
    } else {
      camps = await Camp.find();
    }
    sails.log.debug(camps)
    return ({ camps: camps });
  
  }

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
