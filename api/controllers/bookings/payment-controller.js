module.exports = {


    friendlyName: 'Payment',


    description: 'Payment process.',


    inputs: {


    },


    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/booking/payment'
        },
        notFound: {
            description: 'Sind in den routes',
            responseType: 'notFound'
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },


    fn: async function(inputs) {


        if (!this.req.me) { throw { redirect: '/' } }

        return {

        };
    }


};