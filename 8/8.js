document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3000/usuarios?_limit=3");
  const users = await res.json();
  document.getElementById("output").textContent = JSON.stringify(users, null, 2);
});
