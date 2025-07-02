function actualizarUsuario() {
  fetch('https://api.example.com/usuarios/2', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: "Luis",
      edad: 35
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById("respuesta").textContent = "Error: " + error;
  });
}
