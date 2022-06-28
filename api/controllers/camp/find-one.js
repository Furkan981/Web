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
    let spots = await Spots.find({ owner: camp.vermieterId });

     //Session
     let sessionInhalt = this.req.session.basket

     this.req.session.basket = [];
     this.req.session.basket.push(camp.id);
     this.req.session.basket.push(camp.name)
     this.req.session.basket.push(spots);
     this.req.session.basket.push(this.req.session.userId);
     /* this.req.session.basket.push(sessionInhalt[0]); */
     console.log("basket:")
     sessionInhalt = this.req.session.basket
     console.log(sessionInhalt)

    
     let bis = sessionInhalt[0]
     let status = sessionInhalt[1]
     let userId = sessionInhalt[2]
     let products = sessionInhalt[3]

    if (!camp) { throw 'notFound'; }
    return {
      message : "",
      camp: camp,
      basket: sessionInhalt
    };
  }
};
