function actualizarTelefono() {
  fetch('https://api.example.com/usuarios/5', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ telefono: "3112223344" })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById("respuesta").textContent = "Error: " + error;
  });
}
