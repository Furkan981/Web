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
      required: false
    },
    spots: {
      description: 'The amount of camping-spots.',
      type: 'number',
      required: false
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/camp/show'
    },
  },


  fn: async function (inputs) {
/*
    if (!this.req.me.isAnbieter && !this.req.me.isSuperAdmin) {
      console.log('Sie sind kein Anbieter! Werden Sie zuerst Anbieter');
      throw { redirect: '/' };
  }
*/
    sails.log.debug("Create new camp....")
    sails.log.debug("inputs")
    if (Object.is(NaN,inputs.price) ) {
      console.log("inputs price set to 0: was before");
      console.log(inputs.price);
      inputs.price = 0;
    }
    let anz = inputs.spots;
    if (Object.is(NaN,anz)) {
      console.log("inputs spots set to 0");
      console.log(inputs.spots + "  anz:"+anz);
      anz = 0;
    }

    let resValues = {
      name: inputs.name,
      description: inputs[description],
      price: inputs[price],
      vermieterId: this.req.session.userId,
  }

    let camp = await Camp.create(resValues).fetch();

    for (let index = 1; index <= anz; index++) {
      console.log("inside for loop");
      let spotItemValues={
        spotnumber: index,
        price: inputs.price,
        camp: camp.id
      }
      Spots.create(spotItemValues).exec(function createCB(err, created){
        console.log('Created spot with name ' + created[0].spotnumber);
        console.log('Created sport with name ' + created[1].spotnumber);
        //Do other stuff here.
      });
      
    }
  
    let spoots = await Spots.find();
      sails.log.debug("New spots belonging to camp")
      sails.log.debug(spoots)
    

    sails.log.debug("New camp....")
    sails.log.debug(camp)
    
    if (!camp) { throw 'notFound'; }
    if (!spoots) {throw 'no Spots found belonging to camp'}
    return {
      message: "Successfully created.",
      camp: camp,
      spots: spoots
    };
  }


};
