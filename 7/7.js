document.getElementById("btn").addEventListener("click", async () => {
  const url = "http://localhost:3000/tareas?prioridad=alta&_sort=fechaEntrega&_order=asc";
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
});
