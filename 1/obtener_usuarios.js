document.getElementById("btn-obtener-usuarios").addEventListener("click", async () => {
    try {
        const res = await fetch("http://localhost:3000/usuarios");
        const data = await res.json();
        document.getElementById("resultado-usuarios").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error:", error);
    }
});
