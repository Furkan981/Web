module.exports = {


    friendlyName: 'Destroy',


    description: 'Destroy a products.',


    inputs: {
        id: {
            description: 'The id of the camp.',
            type: 'number',
            required: true
          },
    },


    exits: {
        success: {
            responseType: 'redirect',
        },
        redirect: {
            responseType: 'redirect'
        }
    },


    fn: async function ({id}) {
        sails.log.debug("Destroy booking: "+id)
        let camp = await Booking.destroyOne({id: id});
        if (camp) {
           sails.log("Destroyed: "+camp); 
           return "/account";
        } else {
          sails.log("Can not destroy (not found): "+id);
          return "/account";
        };
      }
    };