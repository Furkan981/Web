/**
 * Camp.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


// api/models/Camp.js
module.exports = {

    attributes: {
      spotnumber:{type : 'number', autoIncrement: true},
      qm:{type : 'string', columnType : 'varchar(255)', required : false},
      price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
      bookings: {
        collection: 'booking',
        via: 'spots'
    },
      camp: {
        model: 'Camp'
    },


    },
  
  };
  