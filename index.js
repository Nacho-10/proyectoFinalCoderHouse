const valorPromedio = 1000;


const opcion = () => {
  const crearCuenta = () => {
    alert("Llená el formulario");
    //hay que crearlo
  };

  const ingresa = () => {
    alert("Colocá tu usuario y contraseña");
    //crear validación de usuario y contraseña con ciertas especificaciones
  };

  const productos = () => {
    let respuestaProductos = prompt(
      "¿Qué te gustaría ver? \n Invierno \n Verano"
    );
    if (respuestaProductos.toLowerCase() === "invierno") {
      alert("Tenemos muchos abrigos para mostrarte");
    } else {
      alert("Hay muchas mallas con onda!");
    }
  };

  const misCompras = () => {
    console.log("Guardar las compras en la DB luego y arrojarlas aquí");
  };

  const carrito = () => {
    console.log("Cada vez que confirme una compra, pushearla al carrito");
  };

  const solicitarCantidadCuotas =() =>{
    return parseInt(prompt("Ingresá la cantidad de cuotas que quiere realizar"))
  }
  const calcularValorCuotas = () => {
   const cuotas = solicitarCantidadCuotas(); 
    let porcentaje = 0;
    if (cuotas <= 3) {
      porcentaje = 0;
    } else if (cuotas <= 6) {
      porcentaje = 15;
    } else if (cuotas <= 12) {
      porcentaje = 30;
    } else {
      console.log("Contamos con hasta 12 cuotas");
    }
    const precio = valorPromedio + (valorPromedio * porcentaje) / 100;
    console.log(
      `El porcentaje de interés para ${cuotas} cuotas, es ${porcentaje}% . El precio total a pagar es ${precio}`
    );
  };

  const usuario = parseInt(
    prompt(
      "Ingresá la opción que quieras: \n 1-CREA TU CUENTA \n 2-INGRESÁ \n 3-PRODUCTOS \n 4-MIS COMPRAS \n 5-CARRITO \n 6-CALCULAR VALOR"
    )
  );
  switch (usuario) {
    case 1:
      crearCuenta();
      break;
    case 2:
      ingresa();
      break;
    case 3:
      productos();
      break;
    case 4:
      misCompras();
      break;
    case 5:
      carrito();
      break;
    case 6:
      calcularValorCuotas();
      break;
    default:
      alert("Opción ingresada inválida");
      break;
  }
};

opcion();
