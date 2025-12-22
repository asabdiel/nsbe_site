const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'resource-hub-backend' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('NSBE Upstate Zone Resource Hub backend — running on port ' + port + '\n');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Resource Hub backend ready on http://localhost:${port}`);
});
