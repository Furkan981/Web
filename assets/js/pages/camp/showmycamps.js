function showmycamp_func() {

    console.log("log");
    let origin = window.location.origin;
    let url = new URL(origin + '/api/v1/showmycamp');
    console.log(url.toString())

    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(function(data) {
                $('.col .item-content .container .row').append('<tr><th><div class="card" style="width: 18rem;margin: 10px; max-height: 25rem; background-color: #f9f7f0; border: 2px solid #178ca4;  "><img src="/' + data.bild + '" style="max-height: 10rem;" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.name + '</h5><h6 class="card-price">Preis : ' + data.price + '€</h6><p class="card-text"> ' + data.id + '</p><a href="camp/delete-camp/' + data.id + '" class="btn btn-outline-info">Löschen</a><a href="camp/edit/' + data.id + '" style="margin-left:10px" class="btn btn-outline-info">Bearbeiten</a></div></div></th></tr>')
            })
        })

}

function showmycamp_func_admin() {

    console.log("log");
    let origin = window.location.origin;
    let url = new URL(origin + '/api/v1/showmycamp-admin');
    console.log(url.toString())

    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(function(data) {
                $('.col .item-content .container .row').append('<tr><th><div class="card" style="width: 18rem;margin: 10px; max-height: 25rem; background-color: #f9f7f0; border: 2px solid #178ca4;  "><img src="/' + data.bild + '" style="max-height: 10rem;" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.name + '</h5><h6 class="card-price">Preis : ' + data.price + '€</h6><p class="card-text"> ' + data.id + '</p><a href="camp/delete-camp-admin/' + data.id + '" class="btn btn-outline-info">Löschen</a><a href="camp/edit/' + data.id + '" style="margin-left:10px" class="btn btn-outline-info">Bearbeiten</a></div></div></th></tr>')
            })
        })

}