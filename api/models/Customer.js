//api/models/Customer.js

module.exports = {
    attributes: {
      /*
      customerId: {
  
        type: 'number',
        required: true,
        unique: true
      },
      */
  
      firstName: {
        type: 'string',
        required: true
      },
  
      lastName: {
        type: 'string',
        required: true
      },
  
      email: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        example: 'user.user@example.com'
      },
  
      phoneNumber: {
        type: 'string',
        required: true,
        unique: true,
        maxLength: 20,
        example: '+49 123 456789'
      },
  
      user: {
        model: 'user'
      }
  
    }
  };
  