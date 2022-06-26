module.exports = {


    friendlyName: 'Destroy',


    description: 'Destroy a user.',


    inputs: {
        id: {
            description: 'The id of the user.',
            type: 'number',
            required: true
        },
    },


    exits: {
        success: {
            responseType: 'redirect',
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },


    fn: async function({ id }) {

        if (!this.req.me.isSuperAdmin) {
            console.log("Sie sind kein Admin!");
            throw { redirect: '/' };
        }


        sails.log.debug("First destroy alle Buchungen eines Users mit der ID:" + id)

        let sql_1 = "SELECT id FROM booking b WHERE b.gast = $1"
        var rawRes_booking = await sails.sendNativeQuery(sql_1, [id])

        let bookings = []
        rawRes_booking.rows.forEach(ele => bookings.push(ele))

        for (let i = 0; i < bookings.length; i++) {
            await Booking.destroyOne({ id: bookings[i].id })
            console.log("Destroyed Bookings with id: " + bookings[i].id)
        }

        sails.log.debug("Second destroy Products of user: " + id)

        let sql_2 = "SELECT id FROM products b WHERE b.vermieterId = $1"
        var rawRes_products = await sails.sendNativeQuery(sql_2, [id])

        let products = []
        rawRes_products.rows.forEach(ele => products.push(ele))

        for (let i = 0; i < products.length; i++) {
            await Products.destroyOne({ id: products[i].id })
            console.log("Destroyed Products with id: " + products[i].id)
        }

        sails.log.debug("Destroy user: " + id)
        let user = await User.destroyOne({ id: id });
        if (user) {
            sails.log("Destroyed: " + user.id);
            return "/users/show-all-users";
        } else {
            sails.log("Can not destroy: " + id);
            return "/users/show-all-users";
        };
    }
};