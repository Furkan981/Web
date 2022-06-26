module.exports = {


    friendlyName: 'Payment',


    description: 'Payment process.',


    inputs: {

        iban: {
            type: 'string',
            require: true
        },
        kontonummer: {
            type: 'string',
            require: true
        },
        blz: {
            type: 'string',
            require: true
        },
        bic: {
            type: 'string',
            require: true
        },


    },


    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/booking/finish'
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

        let sessionInhalt = this.req.session.basket


        
        let bis = sessionInhalt[0]
        let products = sessionInhalt[3]
        this.req.session.basket.push(inputs.iban);
        this.req.session.basket.push(inputs.kontonummer);
        this.req.session.basket.push(inputs.blz);
        this.req.session.basket.push(inputs.bic);

        sessionInhalt = this.req.session.basket
        console.log(sessionInhalt)

        //DATENBANK EINTRAG

        let resValues = {
            bis: sessionInhalt[0],
            status: "gebucht",
            gast: sessionInhalt[2],
            products: sessionInhalt[3].id

        }
        let reservation = await Booking.create(resValues).fetch();

        let payValues = {
            iban: sessionInhalt[4],
            kontonr: sessionInhalt[5],
            blz: sessionInhalt[6],
            bic: sessionInhalt[7],
            gast: sessionInhalt[3]
        }
        let payment = await Payment.create(payValues).fetch();

        return {
            bis,
            products

        };
    }


};