function actualizarEstadoTarea() {
  fetch('https://api.example.com/tareas/2', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ estado: "completado" })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('respuesta').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('respuesta').textContent = "Error: " + error;
  });
}
