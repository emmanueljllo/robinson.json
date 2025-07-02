document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);

  try {
    const res = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, apellido, edad })
    });

    const data = await res.json();
    document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
});
