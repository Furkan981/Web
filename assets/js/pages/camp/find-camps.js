//initialisieren der EventListener in DOM
var filterList = document.querySelectorAll('.form-check-input');
var minmax=document.querySelectorAll('.form-control');
console.log(minmax);
filterList.forEach(input => { input.addEventListener('click', updateDisplay) })
minmax.forEach(input => { input.addEventListener('change', updateDisplay) })
var min= document.getElementById('min')
var max= document.getElementById('max')


//initialisieren der Datenstruktur für die Paramübergabe
var filterSet = {};
filterList.forEach(input => {
    filterSet[input.getAttribute("id")] = new Set();
})

//erstes Laden der Produkte, bevor User sieht
function updateDisplay() {

    filterList.forEach(attr => {
        if (attr.checked) {
            console.log("Added: " + attr.getAttribute("value") + " in Category: " + attr.getAttribute("id"));
            filterSet[attr.getAttribute("id")].add(attr.getAttribute("value"))
        }
         else {
            filterSet[attr.getAttribute("id")].delete(attr.getAttribute("value"))
        }
    })
    
}

function findCamps() {

    let origin = window.location.origin
    let url = new URL(origin + '/api/v1/filtercamps');

    url.searchParams.append("cat", Array.from(filterSet["cat"]))
    url.searchParams.append("min",document.getElementById('min').value)
    url.searchParams.append("max",document.getElementById('max').value)
    console.log(url.toString())

    $('.col .item-content .container .row').empty();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(function(data) {
                $('.col .item-content .container .row').append('<tr><th><div class="card" style="width: 18rem;margin: 10px; max-height: 25rem; background-color: #f9f7f0; border: 2px solid #178ca4;  "><img src="/' + data.bild + ' " style="max-height: 10rem;" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.titel + '</h5><h6 class="card-price">Preis: ' + data.preis + '€</h6><p class="card-text"> ' + data.category + '</p><a href="products/show-detail-products/' + data.id + '" class="btn btn-primary btn btn-sm btn-outline-info" style="width: 30%;">Ansehen</a></div></div></th></tr>')
            })

        })
}