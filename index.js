const http = require('http');
const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('Hello from DevOps!');
};

const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = requestHandler;
