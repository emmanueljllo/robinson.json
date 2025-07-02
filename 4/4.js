async function deleteUser() {
  try {
    const res = await fetch("http://localhost:3000/usuarios/1", {
      method: "DELETE"
    });
    document.getElementById("output").textContent = `Usuario eliminado con estado: ${res.status}`;
  } catch (error) {
    console.error("Error:", error);
  }
}