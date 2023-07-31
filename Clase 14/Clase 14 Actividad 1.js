document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
  
    if (nombre === '' || email === '' || telefono === '') {
      mostrarMensaje('Debes completar todos los campos.', 'alert-danger');
    } else {
      guardarDatos(nombre, email, telefono);
    }
  });
  
  function guardarDatos(nombre, email, telefono) {
   
    mostrarMensaje('Datos guardados correctamente.', 'alert-success');
  }
  
  function mostrarMensaje(mensaje, clase) {
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.innerText = mensaje;
    mensajeElement.className = `alert ${clase}`;
    mensajeElement.style.display = 'block';
  
    
    setTimeout(() => {
      mensajeElement.style.display = 'none';
    }, 3000);
  }
  