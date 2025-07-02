async function getUserById() {
  try {
    const res = await fetch("http://localhost:3000/usuarios/1");
    const data = await res.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error:", error);
  }
}