
// Alert per city
function report() {
    alert("Cargando informe meteorológico...");
}

// Delete cookie ad
var cookie = document.querySelector(".ads");
function deleteCookie () {
    cookie.remove();
}

// Convert temperatures
var minTemp = document.querySelector(".blue");
var maxTemp = document.querySelector(".red");
var selector = document.querySelector(".temp");


function convert () {
    if (selector.value == "far") {
        minTemp.innerText = Math.floor((minTemp.innerText*9)/5+32);
        maxTemp.innerText = Math.floor((maxTemp.innerText*9)/5+32);
    }
}

//Intenté hacer el desafío de conversión 
//pero no he logrado que funcione
//volveré a subir el archivo luego de ver loops y arrays a ver si entiendo mejor como hacerlo :))


