module.exports = {


    friendlyName: 'Booking',


    description: 'Bookingprocess start.',


    inputs: {
        id: {
            description: 'The products of the user to look up.',
            type: 'number',
            required: true
        },

    },

    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/booking/booking'
        },
        notFound: {
            description: 'No camp with the specified ID was found in the database.',
            responseType: 'notFound'
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },


    fn: async function({id}) {


        if (!this.req.me) {
            console.log("Sie sind nicht eingeloggt!")
            throw { redirect: '/' }
        }

        let camps = await Camp.findOne({ id: id });
        if (!camps) { throw 'kein Camp gefunden'; }
        let spots = await Spots.find( {owner : camps.id})
        if (!spots) { throw 'Dieser Camp hat keine Plätze zum reservieren'; }
        
        this.req.session.basket = [];
        this.req.session.basket.push(camps)
        this.req.session.basket.push(spots)
        return {
            camps: camps,
            spots:spots
        };


/* 
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

        }; */
    }


};