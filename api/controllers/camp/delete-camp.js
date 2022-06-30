module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy a camp.',


  inputs: {
    id: {
      description: 'The id of the camp.',
      type: 'number',
      required: true
    },
  },


  exits: {
    success: {
      responseType: 'redirect',
    },
  },


  fn: async function ({id}) {

    if (!this.req.me) {
      console.log('no permission');
      throw { redirect: '/' };
  }

  if (this.req.me.isSuperAdmin) {

  sails.log.debug("lösche alle Buchungen mit Camps(id):" + id)

  let sql_1 = "SELECT id FROM booking b WHERE b.camp = $1"
  var rawRes_booking = await sails.sendNativeQuery(sql_1, [id])

  let bookings = []
  rawRes_booking.rows.forEach(ele => bookings.push(ele))

  for (let i = 0; i < bookings.length; i++) {
      await Booking.destroyOne({ id: bookings[i].id })
      console.log("Destroyed Bookings with id: " + bookings[i].id)
  }

  sails.log.debug("Destroy camp: " + id)
  let camps = await Camp.destroyOne({ id: id });
  if (camps) {
      sails.log("Destroyed: " + camps.id);
      return "/camp";
  } else {
      sails.log("Can not destroy: " + id);
      return "/camp";
  };
}else{

  sails.log.debug("lösche alle Buchungen (non admin) mit Camps(id):" + id )

  /**
   * SELECT a.id
    FROM campingportal.camp b,campingportal.booking a 
    WHERE a.camp = b.id
    AND b.id =3 
    AND b.vermieterId= 4
   */

  // nur die Buchungen wo vermieterID = me.id (weil ich nur meine camps löschen kann)
  let sql_1 = "SELECT a.id FROM camp b,booking a WHERE a.camp = b.id AND b.id = $1 AND b.vermieterId= $2"
  var rawRes_booking = await sails.sendNativeQuery(sql_1, [id,this.req.me.id])
  sails.log.debug(this.req.me.id +" campid:"+id)
  sails.log.debug(rawRes_booking)
  let bookings = []
  sails.log.debug(bookings)
  rawRes_booking.rows.forEach(ele => bookings.push(ele))
  sails.log.debug("2 : "+bookings)
  for (let i = 0; i < bookings.length; i++) {
      await Booking.destroyOne({ id: bookings[i].id })
      console.log("Destroyed Bookings with id: " + bookings[i].id)
  }

  sails.log.debug("Destroy camp: " + id)
  let camps = await Camp.destroyOne({ id: id, vermieterId: this.req.me.id});
  if (camps) {
      sails.log("Destroyed: " + camps.id);
      return "/camp";
  } else {
      sails.log("Can not destroy: " + id);
      return "/camp";
  };

}

/*
    sails.log.debug("Destroy camp: "+id)
    let camp = await Camp.destroyOne({id: id});
    if (camp) {
       sails.log("Destroyed: "+camp); 
       return "/camp";
    } else {
      sails.log("Can not destroy (not found): "+id);
      return "/camp";
    };
  */
  }
  
};
