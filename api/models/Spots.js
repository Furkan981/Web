/**
 * Camp.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


// api/models/Camp.js
module.exports = {

    attributes: {
      spotnumber:{type : 'number', required: true},
      price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
      qm:{type : 'number', required : false},
      owner: { model: 'camp'},
      buchungen: {
        collection: 'booking',
        via: 'spots'
    },
    


    },
  
  };
  