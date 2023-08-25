const http = require("http");
const {URL} = require('url')
const routes = require("./routes");

const server = http.createServer((request, response) => {

  const parseUrl = new URL(`http://localhost:8000${request.url}`)

  console.log(`Request method: ${request.method} | Endpoint: ${parseUrl.pathname}`);

  const route = routes.find((routeObj) =>  (
      routeObj.endpoint === parseUrl.pathname && routeObj.method === request.method
    )
  );

  if (route) {
    request.query = Object.fromEntries(parseUrl.searchParams)
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannont ${request.method} ${parseUrl.pathname}`);
  }
});

server.listen(8000, () =>
  console.log("Server started at http://localhost:8000")
);
