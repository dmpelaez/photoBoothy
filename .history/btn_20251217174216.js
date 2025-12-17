import http from "http";


const server = http.createServer((req, res) => {
  if (req.url === "/data") {
     res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from backend"}));
  }
});

server.listen(6700);

document.getElementById('dataButton')
.addEventListener('click', () => {
  fetch("http//localhost:6700/data")
  .then(res => res.json())
  .then(info => console.log(info));
})