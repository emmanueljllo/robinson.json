function eliminarTarea() {
  fetch('https://api.example.com/tareas/4', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("respuesta").textContent = "Tarea eliminada correctamente.";
    } else {
      document.getElementById("respuesta").textContent = "Error al eliminar la tarea.";
    }
  })
  .catch(error => {
    document.getElementById("respuesta").textContent = "Error: " + error;
  });
}
