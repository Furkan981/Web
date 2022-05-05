/**
 * Camp.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


// api/models/Camp.js
module.exports = {

  attributes: {
    name:{type : 'string', columnType : 'varchar(255)', required : true},
    description:{type : 'string', columnType : 'varchar(255)', required : false},
    price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
    spots:{type : 'number',  columnType: 'DECIMAL (6,2)',  required: true},
  },

};
