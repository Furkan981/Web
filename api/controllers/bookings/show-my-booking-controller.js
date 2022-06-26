module.exports = {


    friendlyName: 'View welcome page',


    description: 'Display the dashboard "Welcome" page.',

    inputs: {

    },

    exits: {
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },


    fn: async function(inputs) {

        if (!this.req.me) { throw { redirect: '/' } }

        let id = this.req.session.userId;

        let sql = "SELECT * FROM booking b, products bo WHERE b.gast = $1 and b.products = bo.id"
        var rawRes = await sails.sendNativeQuery(sql, [id])
        console.log(rawRes)
        let booking = []

        rawRes.rows.forEach(ele => booking.push(ele))
        console.log(booking)
        return booking;


    }


};