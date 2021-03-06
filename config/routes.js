/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },
  'GET /dashboard/welcome': { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /imprint':            { view:   'pages/legal/imprint' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },

   

  //////////////////////////////////////////////////////////////////////////////////////////////

  //Admin relocate User-Settings (different from normal user)
  'GET /admin': {action: 'account/view-account-overview-admin' },
  //Admin - see USERS
  'GET /usermanagement' : { action: 'users/show-all-users'},
  'GET  /users/show-all-users': { action: 'users/show-all-users' },
  'GET /users/delete-user/:id': { action: 'users/delete-user' },
  


  //used for client side filtering with ajax (fetch) camp.find
  'GET /test': { controller: 'CampArealController', action:'find' },
  // //Camps filterSuche
  //'GET /camp': { action: 'CampArealController' },
  'GET /camp': { action: 'camp/find' },
  'GET /camp/:id': { action: 'camp/find-one' },
 
  // Camps CRUD
  'GET /camp/new': { action: 'camp/view-add-camps' },
            //'GET /camp/new': { action: 'camp/view-add-camps' },
  'POST /camp': { action: 'camp/add-camp' },
  'GET /camp/:id/edit': { action: 'camp/edit-camp' },
  'POST /camp/:id/update': { action: 'camp/update-camp' },
  'GET /camp/:id/destroy': { action: 'camp/delete-camp' },

  //////////////////////////////////////////////////////////////////////
 
 // Booking Prozess
 //Customer see bookings/delete
 'GET /reservations' : { action: 'bookings/show-my-booking-controller'},
 'GET /reservations/:id/delete' : { action: 'bookings/delete-booking'},
  //
  'GET /camp/:id/booking': { action: 'bookings/booking' },
  'GET /camp/:id/booking/confirm': { action: 'bookings/confirm' },
  'GET /booking/payment': { action: 'bookings/payment-controller' },
  'GET /booking/finish': { action: 'bookings/finish-controller' },









 // Account 
 // Implementieren in Zukunft?
 /*
 //'GET /account/edit-user/:id': { action: 'users/view-edit-profil-admin' },
 //'GET /users/show-all-users': { view: 'pages/account/show-all-users' },
 'GET /account/edit-password-admin': { action: 'users/view-edit-password-admin' },
 'POST /account/confirm': { action: 'users/update-password-admin' },
 'GET /account/edit-account-admin': { action: 'users/view-edit-account-admin' },
 'POST /account/update-account': { action: 'users/update-account-admin' },
*/
 
 
 
 
 
 
 //test outdated
/*
    'GET /camp/new': { controller: 'CampArealController', action:'new' },
    'POST /camp': { controller: 'CampArealController', action:'create' },
    'GET /camp/:id/edit': { controller: 'CampArealController', action: 'editOne' },
    'POST /camp/:id/update': { controller: 'CampArealController', action: 'updateOne' },
    'GET /camp/:id/delete': { controller: 'CampArealController', action: 'destroyOne' },
    'GET /camp/:id': { controller: 'CampArealController', action: 'findOne' },
    'GET /camp': { controller: 'CampArealController', action: 'find' },
  //Nicht mehr in Use + comb with js-script 
  //'GET /camp/show-detail-camp/:id': { action: 'camp/view-detail-camp' }, find-camps.js (assets)
  //'GET /api/v1/showmycamp': { action: 'camp/show-my-camps' },
  //'GET /api/v1/showmycamps-admin': { action: 'camp/show-all-camps-admin' },
  //'GET /show-my-camps': { view: 'pages/camp/show-my-camp' },
  //'GET /show-all-camp': { action: 'camp/view-show-all-camp' },
  //'GET /camp/delete-camp/:id': { action: 'camp/delete-camp' },
  //'GET /camp/delete-camp-admin/:id': { action: 'camp/delete-camp-admin' },
  //'GET /camp/edit/:id': { action: 'camp/edit-camp' },
  //'POST /camp/:id/update-camp': { action: 'camp/update-camp' },
 */

};
