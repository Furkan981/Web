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
      required: false
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
      responseType: 'redirect',
  },
  redirect: {
      responseType: 'redirect'
  }
  },


  fn: async function ({name,description,price,spots}) {
/*
    if (!this.req.me.isAnbieter && !this.req.me.isSuperAdmin) {
      console.log('Sie sind kein Anbieter! Werden Sie zuerst Anbieter');
      throw { redirect: '/' };
  }
*/
    sails.log.debug("Create new camp....")
    sails.log.debug("inputs")
    

    let resValues = {
      name,
      description,
      price: price,
      vermieterId: this.req.session.userId,
  }
  
  
    let camp = await Camp.create(resValues).fetch();
    let campId = camp.id;
    
    let filter = {
      strom: false,
      wasser: true,
      owner: camp.id
    }
    let fid = await Filters.create(filter).fetch()
    var leena = await Filters.findOne({ id: fid.id })
    sails.log.debug(leena)

    
    for (let index = 1; index <= spots; index++) {
      console.log("inside for loop");
      let spotItemValues={
        spotnumber: index,
        price: price,
        qm:0,
        owner: campId
      }  

      let spod = await Spots.create(spotItemValues).fetch()
      sails.log.debug(spod)
    }
    

    sails.log.debug("New camp....")
    sails.log.debug(camp)
    
    if (!camp) { throw 'notFound'; }
    return "/camp";
    
    return {
      message: "Successfully created.",
      camp: camp,
    };
  }


};
