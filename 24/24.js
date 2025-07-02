function eliminarUsuario() {
  fetch('https://api.example.com/usuarios/6', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("respuesta").textContent = "Usuario eliminado correctamente.";
    } else {
      document.getElementById("respuesta").textContent = "Error al eliminar el usuario.";
    }
  })
  .catch(error => {
    document.getElementById("respuesta").textContent = "Error: " + error;
  });
}
