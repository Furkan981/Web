module.exports = {


  friendlyName: 'Edit',


  description: 'Edit current camp',


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
      viewTemplatePath: 'pages/camp/edit'
    },
    notFound: {
      description: 'No camp with the specified ID was found in the database.',
      responseType: 'notFound'
    },
    redirect: {
      responseType: 'redirect'
  }
  },

  fn: async function ({id}) {

    let camp = await Camp.findOne({ id: id });
    if (!camp) { throw 'notFound'; }
    return {
      camp: camp
    };
  }
};
