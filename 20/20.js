function patchUsuario() {
  fetch("https://api.ejemplo.com/usuarios/4", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ activo: false })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      document.getElementById("resultado").textContent = "Error: " + error;
    });
}

