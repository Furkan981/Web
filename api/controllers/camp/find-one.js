module.exports = {


  friendlyName: 'Find one',


  description: '',


  inputs: {
    id: {
      description: 'The camp of the user to look up.',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/camp/show'
    },
    notFound: {
      description: 'No camp with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function ({id}) {

    let camp = await Camp.findOne({ id: id });
    if (!camp) { throw 'notFound'; }
    return {
      message : "",
      camp: camp
    };
  }
};
