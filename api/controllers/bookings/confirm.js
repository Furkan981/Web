module.exports = {


    friendlyName: 'Booking',


    description: 'Bookingprocess.',


    inputs: {
       
        datebis: {
            type: 'string',
            require: true
        },
    },


    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/booking/confirm'
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

        //Session
        let sessionInhalt = this.req.session.basket
        let campIdbooking = sessionInhalt[0]



        this.req.session.basket = [];
        this.req.session.basket.push(inputs.datebis);
        this.req.session.basket.push('reserviert');
        this.req.session.basket.push(this.req.session.userId);
        this.req.session.basket.push(sessionInhalt[0]);
        console.log("VON:")
        sessionInhalt = this.req.session.basket
        console.log(sessionInhalt)

       
        let bis = sessionInhalt[0]
        let status = sessionInhalt[1]
        let userId = sessionInhalt[2]
        let products = sessionInhalt[3]


        // All done.
        return {
            bis,
            status,
            userId,
            products,

        };
    }


};