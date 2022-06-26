   module.exports = {


       friendlyName: 'View adding products Page',


       description: 'Display "Add products" page where the User can enter the details of his products',


       description: 'Show the detail products <<',


       inputs: {
           id: {
               description: 'The products of the user to look up.',
               type: 'number',
               required: true
           }
       },


       exits: {
           success: {
               responseType: 'view',
               viewTemplatePath: 'pages/account/account-overview-admin'
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

           //Zugriff überprüfen
           if (!this.req.me.isSuperAdmin) {
               console.log("Sie sind kein Admin!");
               throw { redirect: '/' };
           }


           let user = await User.findOne({ id: id });
           if (!user) { throw 'notFound'; }

           this.req.session.basket = [];
           this.req.session.basket.push(user)
           return {
               user: user
           };
       }
   };