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

        if (!this.req.me.isSuperAdmin) {
            console.log('Sie sind kein Admin!');
            throw { redirect: '/' };
        }

        let id = this.req.session.userId;

        let sql = "SELECT * FROM camp b"
        var rawRes = await sails.sendNativeQuery(sql, [id])

        let productss = []

        rawRes.rows.forEach(ele => productss.push(ele))

        return productss;

    }


};