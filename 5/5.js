document.getElementById("btn").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/usuarios/1/tareas");
    const data = await res.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
  }
});
