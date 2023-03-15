function validarFormulario() {
 
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre == "" || apellido == "" || telefono == "" || correo == "" || mensaje == "") {
    alert("Por favor complete todos los campos.");
    return false;
  }

    var correoValido = /\S+@\S+\.\S+/;
  if (!correoValido.test(correo)) {
    alert("Por favor ingrese una dirección de correo electrónico válida.");
    return false;
  }

  // Si todo está bien, enviar el formulario
  alert("Gracias por enviar su mensaje, me comunicaré con Ud. a la brevedad.");
  return true;
}