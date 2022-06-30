/*module.exports = {


    friendlyName: 'Update password',
  
  
    description: 'Update the password for the logged-in user.',
  
  
    inputs: {
  
      fullName: {
        description: 'The new, unencrypted password.',
        example: 'abc123v2',
        required: true
      },
      emailAddress: {
        description: 'The new, unencrypted password.',
        example: 'abc123v2',
        required: true
      }
  
    },
    exits: {
        success: {
          responseType: 'redirect',
        },
      },
  
  
    fn: async function ({fullName, emailAddress}) {

       //Zugriff überprüfen
       if (!this.req.me.isSuperAdmin) {
        console.log("Sie sind kein Admin!");
        throw { redirect: '/' };
    }
  
      // Hash the new password.
      let sessionInhalt = this.req.session.basket
      console.log(sessionInhalt);
      id = sessionInhalt[0].id
      console.log(id);
        await User.updateOne({ id:id })
        .set({
          fullName: fullName,
          emailAddress: emailAddress
        });
      return  "/users/show-all-users";
     
     
  
    }
  
  
  };
  */