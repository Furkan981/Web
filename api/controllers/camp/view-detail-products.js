module.exports = {


    friendlyName: 'View adding products Page',


    description: 'Display "Add products" page where the User can enter the details of his products',


    description: 'Show the detail products',


    inputs: {
        id: {
            description: 'The products of the user to look up.',
            type: 'number',
            required: true
        },

    },


    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/products/show-detail-products'
        },
        notFound: {
            description: 'No products with the specified ID was found in the database.',
            responseType: 'notFound'
        },
        redirect: {
            description: 'Dieser Nutzer ist kein Anbieter.',
            responseType: 'redirect',
        }
    },

    fn: async function({ id }) {

        if (!this.req.me) {
            console.log("Sie sind nicht eingeloggt!")
            throw { redirect: '/' }
        }

        let products = await Products.findOne({ id: id });
        if (!products) { throw 'notFound'; }

        this.req.session.basket = [];
        this.req.session.basket.push(products)
        return {
            products: products
        };


    }
};