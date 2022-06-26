module.exports = {


    friendlyName: 'View welcome page',


    description: 'Display the dashboard "Welcome" page.',

    inputs: {


    },

    exits: {

        success: {
            viewTemplatePath: 'pages/account/show-all-users',
            description: 'Display the welcome page for authenticated users.'
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }

    },


    fn: async function(inputs) {

        if (!this.req.me.isSuperAdmin) {
            console.log("Sie sind kein Admin!");
            throw { redirect: '/' };
        }

        let users = await User.find();
        sails.log.debug(users)
        return ({ users: users });
    }


};