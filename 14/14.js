document.getElementById("loadUsers").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/usuarios?edad_lte=25");
    const data = await res.json();
    document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
});
