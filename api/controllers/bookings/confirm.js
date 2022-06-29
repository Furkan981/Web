module.exports = {


    friendlyName: 'Booking',


    description: 'Bookingprocess.',


    inputs: {
       
        datevon: {
            type: 'string',
            require: true
        },

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
        console.log(campIdbooking)

        this.req.session.basket = [];
        this.req.session.basket.push(inputs.datevon);
        this.req.session.basket.push(inputs.datebis);
        this.req.session.basket.push(this.req.session.userId);
        this.req.session.basket.push(sessionInhalt[0]);
        console.log("basket:")
        sessionInhalt = this.req.session.basket
        console.log(sessionInhalt)

       
        let von = sessionInhalt[0]
        let bis = sessionInhalt[1]
        let userId = sessionInhalt[2]
        let camps = sessionInhalt[3]


        // All done.
        return {
            von,
            bis,
            userId,
            camps,

        };
    }


};