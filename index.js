const valorPromedio = 1000;

const usuariosValidos = [
  { usuario: "ignacio", contraseña: "musa" },
  { usuario: "eduardo", contraseña: "coudet" },
];

const totalDeProductos = [
  {
    nombre: "Landing Page",
    precio: 50.0,
    categoría: "producto",
  },
  {
    nombre: "Page",
    precio: 100.0,
    categoría: "producto",
  },
  {
    nombre: "Corrección de error",
    precio: 20.0,
    categoría: "servicio",
  },
  {
    nombre: "Mantenimiento",
    precio: 10.0,
    categoría: "servicio",
  },
];

const opcion = () => {

  const crearCuenta = () => {
    prompt("Llená el formulario");
    //hay que crearlo
  };

  const ingresa = () => {
    const usuario = prompt("Ingresa tu usuario:");
    const contraseña = prompt("Ingresa tu contraseña:");
    // debo crear una validación, no dar opciones!
    if (usuario === "ignacio" && contraseña === "musa" || usuario === "eduardo" && contraseña === "coudet") {
      alert(`¡Bienvenido ${usuario} Has ingresado exitosamente.`);
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }; 

  const productos = () => {
    alert("Productos disponibles:");
    alert(totalDeProductos.map((producto, index) => `${index + 1}. ${producto.nombre} - Precio: ${producto.precio} \n`).join(""));
    //alert(totalDeProductos.map((producto) => `${producto.nombre} - Precio: ${producto.precio} \n`));
    /* totalDeProductos.forEach((producto, index) => {
      alert(`${index + 1}. ${producto.nombre} - Precio: ${producto.precio}`);
    }); */
  
    const opcionProducto = parseInt(prompt("Ingresa el número del producto que deseas ver o comprar:"));
  
    if (opcionProducto >= 1 && opcionProducto <= totalDeProductos.length) {
      const productoSeleccionado = totalDeProductos[opcionProducto - 1];
      alert(`Detalles del producto seleccionado: \n` + `Nombre: ${productoSeleccionado.nombre}` + ` Precio: ${productoSeleccionado.precio}` )
      /* console.log(`Detalles del producto seleccionado:`);
      console.log(`Nombre: ${productoSeleccionado.nombre}`);
      console.log(`Precio: ${productoSeleccionado.precio}`); */
    } else {
      alert("Opción de producto inválida. Inténtalo de nuevo.");
    }
  };

  const carrito = () => {
    const misCompras = () => {
      const comprasRealizadas = [];
    
      console.log("Tus compras realizadas:");
      if (comprasRealizadas.length === 0) {
        console.log("Aún no has realizado ninguna compra.");
      } else {
        comprasRealizadas.forEach((compra, index) => {
          console.log(`${index + 1}. ${compra.producto} - Precio: ${compra.precio}`);
        });
      }
    
      const realizarCompra = () => {
        const nombreProducto = prompt("Ingresa el nombre del producto que deseas comprar:");
        const precioProducto = parseFloat(prompt("Ingresa el precio del producto:"));
    
        if (isNaN(precioProducto)) {
          console.log("Precio inválido. La compra no se realizará.");
          return;
        }
    
        const nuevaCompra = {
          producto: nombreProducto,
          precio: precioProducto,
        };
    
        comprasRealizadas.push(nuevaCompra);
    
        console.log("Compra realizada con éxito:");
        console.log(`Nombre: ${nombreProducto}`);
        console.log(`Precio: ${precioProducto}`);
      };
    
      const realizarOtraCompra = prompt("¿Deseas realizar una compra? (Si/No)").toLowerCase();
      if (realizarOtraCompra === "si") {
        realizarCompra();
      }
    };
    
    misCompras();
  };

  const solicitarCantidadCuotas = () => {
    return parseInt(
      prompt("Ingresá la cantidad de cuotas que quiere realizar")
    );
  };
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

  const usuario1 = parseInt(
    prompt(
      "Ingresá la opción que quieras: \n 1-CREA TU CUENTA \n 2-INGRESÁ \n 3-PRODUCTOS \n 4-MIS COMPRAS \n 5-CARRITO \n 6-CALCULAR VALOR"
    )
  );
  switch (usuario1) {
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
