function calculate2(von, bis, preis) {
    var von2 = new Date(von)
    var bis2 = new Date(bis)
    console.log(((bis2 - von2) / 86400000) * parseInt(preis), "€")
    var gesamtpreis = (((bis2 - von2) / 86400000) + 1) * parseInt(preis)

    if (gesamtpreis <= 0) {
        return "von > bis";
    } else {
        return gesamtpreis;
    }
}