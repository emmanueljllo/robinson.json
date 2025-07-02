document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3000/usuarios?_page=2&_limit=5");
  const users = await res.json();
  document.getElementById("output").textContent = JSON.stringify(users, null, 2);
});
