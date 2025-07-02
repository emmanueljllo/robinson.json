function cambiarPrioridad() {
  fetch('https://api.example.com/tareas/3', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prioridad: "media" })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById("respuesta").textContent = "Error: " + error;
  });
}
