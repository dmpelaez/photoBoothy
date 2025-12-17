import http from "http";


const server = http.createServer((req, res) => {
  if (req.url === "/frontend.html") {
     res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from backend"}));
  }
});

server.listen(5500);

