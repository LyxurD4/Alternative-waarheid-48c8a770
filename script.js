const goedeAntwoorden = [
    "Parijs",
    "8",
    "IJsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]
];

function controle() {
    let counter = 0;
    let antwoordElementen = [];

    let hoofdstadElement = document.getElementById("hoofdstadAntwoord");
    antwoordElementen.push(hoofdstadElement);
    // let hoofdstadAntwoord = hoofdstadElement.value;

    let potenElement = document.getElementById("potenAntwoord");
    antwoordElementen.push(potenElement);
    // let potenAntwoord = hoofdstadElement.value;
    
    let meerElement = document.getElementById("meerAntwoord");
    antwoordElementen.push(meerElement);
    // let meerAntwoord = meerElement.value;

    let merkElement = document.getElementById("merkAntwoord");
    antwoordElementen.push(merkElement);
    // let merkAntwoord = merkElement.value;

    let eilandElement = document.getElementById("eilandAntwoord");
    antwoordElementen.push(eilandElement);
    // let eilandAntwoord = eilandElement.value;
    
    for (let i = 0; i < goedeAntwoorden.length; i++) {
        if (i >= 3) {
            if (goedeAntwoorden[i].includes(antwoordElementen[i].value)) {
                counter++;
                console.log("goed in de array");
                antwoordElementen[i].style.backgroundColor = "lightgreen";
            } else {
                console.log("fout in de array");
                antwoordElementen[i].style.backgroundColor = "red";
            }
        } else {
            if (goedeAntwoorden[i] === antwoordElementen[i].value) {
                counter++;
                antwoordElementen[i].style.backgroundColor = "lightgreen"
            } else {
                console.log("fout");
                antwoordElementen[i].style.backgroundColor = "red";
            }
        }
    }

    if (counter === 5) {
        document.getElementById("target").innerHTML = "Alle antwoorden goed!";
    } else {
        document.getElementById("target").innerHTML = "Sommige antwoorden zijn nog niet goed."
    }
}