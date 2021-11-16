const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.method, req.url);
	res.write(`
    <html>
      <head><title>Hello Node</title></head>
      <body>
        <p>Hello from Node.js Server</p>
      </body>
    </html>
  `);

	res.end();
});

server.listen(3000);
