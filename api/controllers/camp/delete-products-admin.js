module.exports = {


    friendlyName: 'Destroy',


    description: 'Destroy a products.',


    inputs: {
        id: {
            description: 'The id of the products.',
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


    fn: async function({ id }) {

        if (!this.req.me.isSuperAdmin) {
            console.log('Sie sind kein Admin!');
            throw { redirect: '/' };
        }


        sails.log.debug("First destroy alle Bestellungen eines Produktes mit der ID:" + id)

        let sql_1 = "SELECT id FROM booking b WHERE b.products = $1"
        var rawRes_booking = await sails.sendNativeQuery(sql_1, [id])

        let bookings = []
        rawRes_booking.rows.forEach(ele => bookings.push(ele))

        for (let i = 0; i < bookings.length; i++) {
            await Booking.destroyOne({ id: bookings[i].id })
            console.log("Destroyed Bookings with id: " + bookings[i].id)
        }

        sails.log.debug("Destroy products: " + id)
        let products = await Products.destroyOne({ id: id });
        if (products) {
            sails.log("Destroyed: " + products.id);
            return "/show-all-products";
        } else {
            sails.log("Can not destroy: " + id);
            return "/show-all-products";
        };
    }
};