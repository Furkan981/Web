/**
 * Filters.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


// api/models/Filters.js
module.exports = {
    attributes: {
        strom:{type: 'boolean', defaultsTo: false, },
        wasser:{type: 'boolean', defaultsTo: false, },
        owner:{
            model:'camp',
          }
        
    },
  
  };
  