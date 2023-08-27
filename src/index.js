const http = require("http");
const { URL } = require("url");
const routes = require("./routes");
const { Console } = require("console");

const server = http.createServer((request, response) => {
  const parseUrl = new URL(`http://localhost:8000${request.url}`);
  console.log(`Request method: ${request.method} | Endpoint: ${parseUrl.pathname}`);

  let { pathname } = parseUrl;
  let id = null;

  const splitEndpoint = pathname.split("/").filter(Boolean);
  

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find((routeObj) => (
      routeObj.endpoint === pathname && routeObj.method === request.method
    ));

  if (route) {
    request.query = Object.fromEntries(parseUrl.searchParams);
    request.params = {id};

    response.send = (statusCode, body) => {
        response.writeHead(statusCode,{'Content-type' : 'application/json' });
        response.end(JSON.stringify(body));
    }

    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannont ${request.method} ${parseUrl.pathname}`);
  }
});

server.listen(8000, () =>
  console.log("Server started at http://localhost:8000")
);
