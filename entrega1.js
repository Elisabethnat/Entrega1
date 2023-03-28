////Ejemplo carrito para preentrega

/**
 Calcular la sumatoria de precios por item de una tienda de fotografia.
 */

let precioItem;
let cantidad;
let total=0;
let seguir;
let nombreUser;

nombreUser = prompt("Bienvenido a Photomemory!, Por favor ingrese su nombre");

do
{
   do {       
        precioItem = parseFloat(prompt("Ingrese el precio del item deseado:1- Book personal $10000 2- Sesion de fotos para casamiento $30000 3- Eventos especiales "));
        if (precioItem <=0)
        {
            alert("Precio invalido!");
        }

    }while (precioItem <= 0);

    cantidad = parseInt(prompt("Ingrese su cantidad"));
    while (cantidad <= 0)
    {
        cantidad = parseInt(prompt("cantidad invalida, vuelva a ingresarla"));
    }

    total = (total + (precioItem*cantidad));
    seguir = prompt("Desea ingresar otro item? s/n");
    
}while(seguir == 's');

alert(`El total para ${nombreUser} es: ${total}`);

