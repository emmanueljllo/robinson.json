document.getElementById("loadData").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/tareas?prioridad_ne=baja");
    const data = await res.json();
    document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error("Error al obtener las tareas:", err);
  }
});
