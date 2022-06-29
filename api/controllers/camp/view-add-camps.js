module.exports = {


    friendlyName: 'View adding camp Page',


    description: 'Display "Add camp" page where the User can enter the details of his products',


    exits: {

        success: {
            viewTemplatePath: 'pages/camp/new',
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }

    },


    fn: async function() {
        if (!this.req.me.isAnbieter && !this.req.me.isSuperAdmin) {
            console.log('Sie sind kein Anbieter! Werden Sie zuerst Anbieter');
            throw { redirect: '/' };
        }
    }

}