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
            description: '',
            responseType: 'notFound'
        },
        redirect: {
            description: 'Dieser Nutzer ist nicht eingeloggt',
            responseType: 'redirect',
        }
    },


    fn: async function(inputs) {


        if (!this.req.me) { throw { redirect: '/' } }

        /*
        basket:
        [
        '07/01/2022',               //von                           0
        '07/09/2022',               //bis                           1
        1,                          //userId                        2
            {                       //camp model                    3
            createdAt: 1656522063015,
            updatedAt: 1656522063015,
            id: 1,
            name: 'Camp Konstanz',
            description: 'Campen an der HTWG',
            price: 10,
            vermieterId: 1
            },
        8                           // #days date difference        4
        ]
*/


        let sessionInhalt = this.req.session.basket


        let von = sessionInhalt[0]
        let bis = sessionInhalt[1]
        let userId = sessionInhalt[2]
        let camps = sessionInhalt[3]
        let tage = sessionInhalt[4]

        this.req.session.basket.push(inputs.iban);
        this.req.session.basket.push(inputs.kontonummer);
        this.req.session.basket.push(inputs.blz);
        this.req.session.basket.push(inputs.bic);

        sessionInhalt = this.req.session.basket
        console.log(sessionInhalt)

        //Create Booking
        /**model:
         *  von: {type: 'ref',columnType: 'DATE',required: true,},
            bis: {type: 'ref',columnType: 'DATE',required: true,},
            total:{type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
            gast: {model:'user', required:true,},
            camp: {model: 'camp',required: true,},
              // <---- spots: {collection: 'spots',via: 'buchungen'}, //NOT IMPLEMENTED  -->
         */
        let total = 0 + sessionInhalt[4] * (camps.price)
        let dt1 = new Date(sessionInhalt[0]);
        let dt2 = new Date(sessionInhalt[1]);
        
        let book = {
            von: dt1,
            bis: dt2,
            total: total,
            gast: sessionInhalt[2],
            camp: sessionInhalt[3].id
        }
        
        let booking = await Booking.create(book).fetch();

        let bank = {
            iban: sessionInhalt[5],
            kontonr: sessionInhalt[6],
            blz: sessionInhalt[7],
            bic: sessionInhalt[8],
            gast: sessionInhalt[2]
        }
        let payment = await Payment.create(bank).fetch();

        return {
            von,
            bis,
            camps,
            userId,
            bank,
            tage,
            total

        };
    }


};