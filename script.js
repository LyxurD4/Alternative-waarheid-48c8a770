const goedeAntwoorden = [
    "Parijs",
    "8",
    "Ijsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];
var antwoordElementen = [];
var counter = 0;

function controle() {
    var hoofdstadElement = document.getElementById("hoofdstadAntwoord");
    antwoordElementen.push(hoofdstadElement);
    var hoofdstadAntwoord = hoofdstadElement.value;

    var potenElement = document.getElementById("potenAntwoord");
    antwoordElementen.push(potenElement);
    var potenAntwoord = hoofdstadElement.value;

    var meerElement = document.getElementById("meerAntwoord");
    antwoordElementen.push(meerElement);
    var potenAntwoord = meerElement.value;
    
    for (var i = 0; i < goedeAntwoorden.length; i++) {
        if (goedeAntwoorden[i] === antwoordElementen[i].value) {
            counter++;
            antwoordElementen[i].style.backgroundColor = "lightgreen"
        } else {
            console.log("fout");
            antwoordElementen[i].style.backgroundColor = "red";
        }
    }

    if (counter === 5) {
        document.getElementById("target").innerHTML = "Alle antwoorden goed!";
    } else {
        document.getElementById("target").innerHTML = "Sommige antwoorden zijn nog niet goed."
    }
}