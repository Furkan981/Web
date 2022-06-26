module.exports = {


    friendlyName: 'View edit password',


    description: 'Display "Edit password" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/products/show-all-products-admin'
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },


    fn: async function() {

        if (!this.req.me.isSuperAdmin) {
            console.log("Sie sind kein Admin!");
            throw { redirect: '/' };
        }

        let user = this.req.session.basket
        console.log(user);
        return { user };
    }


};