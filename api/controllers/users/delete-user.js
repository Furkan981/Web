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

        sails.log.debug("Second destroy camps of user: " + id)

        let sql_2 = "SELECT id FROM camp b WHERE b.vermieterId = $1"
        var rawRes_camps = await sails.sendNativeQuery(sql_2, [id])

        let camps = []
        rawRes_camps.rows.forEach(ele => camps.push(ele))

        for (let i = 0; i < camps.length; i++) {
            await Camps.destroyOne({ id: camps[i].id })
            console.log("Destroyed camps with id: " + camps[i].id)
        }

        sails.log.debug("Destroy user: " + id)
        let user = await User.destroyOne({ id: id });
        if (user) {
            sails.log("Destroyed: " + user.id);
            return "/usermanagement";
        } else {
            sails.log("Can not destroy: " + id);
            return "/usermanagement";
        };
    }
};