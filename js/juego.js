
let profes = document.getElementById("boton")

profes.addEventListener('click', () => {

let jugarDenuevo, apuesta, subtotal
let veces = 0
let total = 0
let moneda = (document.getElementById("juego").value);

if (moneda == "vacio") {
    alert("Por favor Ingrese una opcion")
}

else{
    alert("Bienvenido al Carisellazo donde aveces se gana o aveces se pierde");

    do {
        apuesta = prompt("¿Cuanto deseas apostar?");

        if (apuesta <= 0) {
            alert("Ingrese una cantidad por favor")
        } else if (apuesta > 20000) {
            alert("Ingrese una apuesta menor a 20.000")
        }
        else{
        
            alert("Preparado para saber su resultado?, Precione aceptar para saber el valor de la moneda");
            let opc = Math.floor(Math.random()*2)+1;

            if (moneda == "Cara" & opc == 1) {
                subtotal = apuesta * 2;
                alert("La maquina ha sacado Cara y usted ha seleccionado Cara por lo tanto ha ganado!!!!");
                alert("EL subtotal es de " + subtotal);
            }
            else if (moneda == "Cara" & opc == 2) {
                subtotal = apuesta - apuesta;
                alert("La maquina ha sacado Sello y usted ha seleccionado Cara por lo tanto perdio :(");
                alert("El subtotal es " + subtotal);
            }
            else if (moneda == "Sello" & opc == 2) {
                subtotal = apuesta * 2;
                alert("La maquina ha sacado Sello y usted ha seleccionado Sello por lo tanto ha ganado!!!!");
                alert("El subtotal es " + subtotal);
            }
            else if (moneda == "Sello" & opc == 1) {
                subtotal = apuesta - apuesta;
                alert("La maquina ha sacado Cara y usted ha seleccionado Sello por lo tanto perdio :(");
                alert("EL subtotal es " + subtotal);
            }
    
            veces = 1 + veces
            total = total + subtotal
            jugarDenuevo = prompt("Si desea volver a jugar con la misma opcion digite 1 o si desea salir a elegir otra opcion digite 2");
        }

    } while (jugarDenuevo != 2){
        alert("Gracias por jugar, las veces que jugaste fueron "+ veces +" y el total es de "+total);
    }
}
})  
