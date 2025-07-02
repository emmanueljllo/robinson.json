async function getUsuarios() {
  try {
    const response = await fetch('http://localhost:3000/usuarios?rol_ne=admin');
    const data = await response.json();
    document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error:', error);
  }
}
