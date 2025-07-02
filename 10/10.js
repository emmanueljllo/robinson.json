document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3000/tareas?titulo_like=Diseñar");
  const tareas = await res.json();
  document.getElementById("output").textContent = JSON.stringify(tareas, null, 2);
});
