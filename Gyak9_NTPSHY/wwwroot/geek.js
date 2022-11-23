console.onload = () => {
    console.log("Oldal betöltve");

}


var viccek;
function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikekes letöltés")
    console.log(d)
    viccek = d;
    

    for (var i = 0; i < viccek.length; i++) {
        var új = document.createElement("dev");
        új.innerHTML = viccek[i].text;

        document.getElementById("ide").appendChild(új);
    }
}