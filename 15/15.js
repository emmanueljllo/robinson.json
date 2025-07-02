document.getElementById("loadTasks").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/tareas?fechaEntrega_gt=2024-06-10");
    const data = await res.json();
    document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
  }
});
