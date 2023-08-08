const valorPromedio = 1000;

const usuariosValidos = [
  { usuario: "ignacio", contraseña: "musa" },
  { usuario: "eduardo", contraseña: "coudet" },
];

const comprasRealizadas = [];

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

// const opcion = () => {
const crearCuenta = (usuario, contraseña) => {
  usuariosValidos.push({ usuario, contraseña });
};

const ingresa = () => {
  const usuario = prompt("Ingresa tu usuario:");
  const contraseña = prompt("Ingresa tu contraseña:");

  const usuarioValido = usuariosValidos.filter(
    (user) => user.usuario === usuario && user.contraseña === contraseña
  );

  if (usuarioValido.length) {
    alert(`¡Bienvenido ${usuario} Has ingresado exitosamente.`);
  } else {
    console.log(usuarioValido);
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
  }
};

const productos = () => {
  alert("Productos disponibles:");
  alert(
    totalDeProductos
      .map(
        (producto, index) =>
          `${index + 1}. ${producto.nombre} - Precio: ${producto.precio} \n`
      )
      .join("")
  );

  const opcionProducto = parseInt(
    prompt("Ingresa el número del producto que deseas ver o comprar:")
  );

  if (opcionProducto >= 1 && opcionProducto <= totalDeProductos.length) {
    const productoSeleccionado = totalDeProductos[opcionProducto - 1];
    alert(
      `Detalles del producto seleccionado: \n` +
        `Nombre: ${productoSeleccionado.nombre}` +
        ` Precio: ${productoSeleccionado.precio}`
    );
  } else {
    alert("Opción de producto inválida. Inténtalo de nuevo.");
  }
};

const carrito = () => {
  const misCompras = () => {
    console.log("Tus compras realizadas:");
    if (comprasRealizadas.length === 0) {
      console.log("Aún no has realizado ninguna compra.");
    } else {
      comprasRealizadas.forEach((compra, index) => {
        console.log(
          `${index + 1}. ${compra.producto} - Precio: ${compra.precio}`
        );
      });
    }

    const realizarCompra = () => {
      const nombreProducto = prompt(
        "Ingresa el nombre del producto que deseas comprar:"
      );
      const precioProducto = parseFloat(
        prompt("Ingresa el precio del producto:")
      );

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

    const realizarOtraCompra = prompt(
      "¿Deseas realizar una compra? (Si/No)"
    ).toLowerCase();
    if (realizarOtraCompra === "si") {
      realizarCompra();
    }
  };

  misCompras();
};

const mostrarCompras = () => {
  console.log(comprasRealizadas);
  return comprasRealizadas;
};

const solicitarCantidadCuotas = () => {
  return parseInt(prompt("Ingresá la cantidad de cuotas que quiere realizar"));
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
//}