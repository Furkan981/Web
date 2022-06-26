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

        if (!this.req.me.isAnbieter && !this.req.me.isSuperAdmin) {
            console.log('Sie sind kein Anbieter.');
            throw { redirect: '/' };
        }

        let id = this.req.session.userId;

        let sql = "SELECT * FROM camp a WHERE a.vermieterId = $1"
        var res = await sails.sendNativeQuery(sql, [id])

        let camps = []

        res.rows.forEach(ele => camps.push(ele))

        return camps;


    }


};