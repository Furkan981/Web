/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {
  "confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},
  "logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},
  "updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},
  "updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},
  "updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},
  "login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},
  "signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},
  "sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},
  "updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},
  "deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},
  "observeMySession":{"verb":"POST","url":"/api/v1/observe-my-session","args":[],"protocol":"io.socket"}},
  
//new

       
        /*"filterBoats": { "verb": "GET", "url": "/api/v1/filterboats", "args": ["cat", "pat", "min", "max"] },
        "showMyBoatsController": { "verb": "GET", "url": "/api/v1/showmyboats", "args": [] },
        "deleteBoat": { "verb": "GET", "url": "/boat/delete-boat/:id", "args": ["id"] },
        "editBoat": { "verb": "GET", "url": "/boat/edit/:id", "args": ["id"] },
        "updateBoat": { "verb": "POST", "url": "/boat/:id/update-boat", "args": ["id", "titel", "typ", "beschreibung", "preisProTag", "breite", "laenge", "kaution", "patente", "ortsbeschreibung"] },
        "booking": { "verb": "GET", "url": "/booking/confirm", "args": ["datevon", "datebis"] },
        "paymentController": { "verb": "GET", "url": "/booking/payment", "args": [] },
        "finishController": { "verb": "GET", "url": "/booking/finish", "args": ["iban", "knr", "blz", "bic"] },
        "showAllUsers": { "verb": "GET", "url": "/users/show-all-users", "args": [] },
        "deleteUser": { "verb": "GET", "url": "/users/delete-user/:id", "args": ["id"] },
        "updatePasswordAdmin": { "verb": "POST", "url": "/account/confirm", "args": ["password", "bestaetigen"] },
        "updateAccountAdmin": { "verb": "POST", "url": "/account/update-account", "args": ["fullName", "emailAddress"] },
        "anbieterWerden": { "verb": "POST", "url": "/anbieter/anbieter-werden", "args": ["iban", "knr", "blz", "bic"] },
        "showMyBookingController": { "verb": "GET", "url": "/api/v1/showmybookings", "args": [] }*/
  /* eslint-enable */


});
