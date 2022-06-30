/*module.exports = {


    friendlyName: 'Update password',
  
  
    description: 'Update the password for the logged-in user.',
  
  
    inputs: {
  
      password: {
        description: 'The new, unencrypted password.',
        example: 'abc123v2',
        required: true
      },
      bestaetigen: {
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
  
  
    fn: async function ({password, bestaetigen}) {

       //Zugriff überprüfen
       if (!this.req.me.isSuperAdmin) {
        console.log("Sie sind kein Admin!");
        throw { redirect: '/' };
    }
  
      // Hash the new password.
      var hashed = await sails.helpers.passwords.hashPassword(password);
      let sessionInhalt = this.req.session.basket
      console.log(sessionInhalt);
      id = sessionInhalt[0].id
      console.log(id);
      if(password==bestaetigen){
        await User.updateOne({ id:id })
        .set({
          password: hashed
        });
      } else {
        console.log("Sie sind kein Admin!");
      }
      return  "/users/show-all-users";
     
     
  
    }
  
  
  };
  */