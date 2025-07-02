document.getElementById("tareaForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  const fechaEntrega = document.getElementById("fechaEntrega").value;

  try {
    const res = await fetch("http://localhost:3000/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ titulo, descripcion, fechaEntrega })
    });

    const data = await res.json();
    document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error al crear tarea:", error);
  }
});
