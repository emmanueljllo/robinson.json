async function createUser() {
  try {
    const res = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30
      })
    });
    const data = await res.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error:", error);
  }
}
