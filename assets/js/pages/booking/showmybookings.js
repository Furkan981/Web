function findmybookings() {

    console.log("log");
    let origin = window.location.origin;
    let url = new URL(origin+ '/api/v1/showmybookings');
    console.log(url.toString())
        
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(function(data) {
                $('.col .item-content .container .row .table-input').append('<tr><th scope="row">' + data.id + '</th><td>' + data.bis + '</td><td>' + data.preis + '</td><td>' + data.status + '</td> <td>' + data.titel + '</td></tr>')
            })
        })

}