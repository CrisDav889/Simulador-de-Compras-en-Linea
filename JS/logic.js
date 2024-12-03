function check() {
    var pro1 = parseInt(document.getElementById("quan1").value) || 0;
    var pro2 = parseInt(document.getElementById("quan2").value) || 0;
    var pro3 = parseInt(document.getElementById("quan3").value) || 0;
    var destinity = parseInt(document.getElementById("destinity").value);
    var client = document.getElementById("client").value;
    var count = pro1 + pro2 + pro3;
    var total = pro1 * 350 + pro2 * 550 + pro3 * 450;
    var discount = 0;

    switch (destinity) {
        case 1:
            total += 0.015 * total;
            var place = "Ciudad - 1.5%";
            break;
        case 2:
            total += 276;
            var place = "Sololá - Q. 276.00";
            break;
        case 3:
            total += 400;
            var place = "Quetzaltenango - Q 400.00";
            break;
        case 4:
            total += 200;
            var place = "Jalapa - Q. 200.00";
            break;
        case 5:
        case 6: // Para casos 5 y 6
            total += 484;
            var place = "San Marcos o Izabal - Q. 484.00";
            break;
        default:
            var place = "Destino no especificado";
    }

    switch (client) {
        case "Oro":
            discount = total * 0.10;
            break;
        case "Platino":
            discount = total * 0.15;
            break;
        case "Diamante":
            discount = total * 0.25;
            break;
    }

    var result = total - discount;

    document.getElementById("r").innerHTML =
        "Cantidad de producto: " + count +
        "<br>Destino: " + place +
        "<br>Descuento: Q." + discount.toFixed(2) + // Ajuste para dos decimales
        "<br>Total a pagar: Q. " + result.toFixed(2); // Ajuste para dos decimales
}


function other() {
    location.reload();}