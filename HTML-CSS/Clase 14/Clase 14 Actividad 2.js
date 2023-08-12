document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const destino = document.getElementById('destino').value;
  
    if (nombre === '' || edad === '' || destino === '') {
      mostrarMensaje('Debes completar todos los campos.', 'alert-danger');
    } else {
      guardarDatosViajero(nombre, edad, destino);
    }
  });
  
  function guardarDatosViajero(nombre, edad, destino) {
    
    const mensaje = `Datos del Viajero:
      Nombre: ${nombre}
      Edad: ${edad}
      Destino: ${destino}`;
    mostrarMensaje(mensaje, 'alert-success');
  }
  
  function mostrarMensaje(mensaje, clase) {
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.innerText = mensaje;
    mensajeElement.className = `alert ${clase}`;
    mensajeElement.style.display = 'block';
  
    
    setTimeout(() => {
      mensajeElement.style.display = 'none';
    }, 5000);
  }
  