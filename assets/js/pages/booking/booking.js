let reservedPlaces = new Set();
let blockedPlaces = new Set();

function createGrid() {
    $('td').on('click', selectPlace )
}
/*
function createRow(rowid, rowNumber, count) {
    let row = $("#"+rowid);
    for (let i=1;i<=count;i++) {
        let id = `p${rowNumber}${i}`;
        row.append(`<td id='${id}'>${rowNumber}${i}</td>`);
    }
}
*/

function selectPlace() {
    let date = $("#resdate").val()
    let id = $("#tdid");
    console.log("JQuery Event: "+id+ " Date: "+date);
    if (!date || date.length == 0) {
        return;
    }
    if (!blockedPlaces.has(id)) {
        if (reservedPlaces.has(id)) {
            reservedPlaces.delete(id);
            $('#'+id).removeClass('bg-primary');
        } else {
            reservedPlaces.add(id);
            $('#'+id).addClass('bg-primary');
        }
    }
    console.log("Reserved Places: ")
    console.dir(reservedPlaces)
}

function resetSelection() {
    $('.table').empty();
    createGrid();
    reservedPlaces = new Set();
    find();
}

function find() {
    let date = $("#resdate").val()
    let origin = window.location.origin
    let url = new URL(origin+'/api/v1/reservation/find');
    url.searchParams.append("date",date);

   fetch(url)
    .then(res => res.json())
    .then(data => {
        blockedPlaces = new Set();
        data.forEach( (id) => {
            $('#'+id).addClass('bg-secondary')
            blockedPlaces.add(id);
        })
    })
}


function reserve() {
    console.log("Reserve: ")
    let date = $("#resdate").val()
    let places = Array.from(reservedPlaces);
    const formData = {
        date: date,
        places: places,
        _csrf: window.SAILS_LOCALS._csrf
    }
    const body = JSON.stringify(formData);   
    const postForm = (body) => {
        return fetch('/api/v1/reservation/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        });
    }
    postForm(body)
    .then(res => res.json())
    .then(data => {
        console.log("AJX: Result -->")
        let id = data.id;
        window.location = "/reservationprocess/"+id;
    })
}