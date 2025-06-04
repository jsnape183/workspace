var http = require("http");
const url = require("url");
const products = require("./products.js");
const cart = require("./cart.js");
const checkout = require("./checkout.js");

const CONTENT_TYPE_JSON = { "Content-Type": "application/json" };
const CONTENT_TYPE_HTML = { "Content-Type": "text/html" };

// Helper function for sending HTTP responses
const sendResponse = (res, statusCode, contentType, data) => {
  res.writeHead(statusCode, contentType);
  res.end(JSON.stringify(data));
};

const handleGetRequest = (req, res, parsedUrl) => {
  if (parsedUrl.path === "/") {
    sendResponse(res, 200, CONTENT_TYPE_HTML, `<b>PONG</b>`);
    return;
  }
  if (parsedUrl.path === "/products") {
    sendResponse(res, 404, CONTENT_TYPE_JSON, { products });
    return;
  }

  if (parsedUrl.path === "/cart") {
    sendResponse(res, 404, CONTENT_TYPE_JSON, { cart });
    return;
  }

  if (parsedUrl.path === "/checkout") {
    sendResponse(res, 404, CONTENT_TYPE_JSON, { checkout });
    return;
  }

  // Return a 404 response if the endpoint is not found
  sendResponse(res, 404, CONTENT_TYPE_JSON, { error: "Endpoint not found" });
};

//create a server object:
http
  .createServer(function (req, res) {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);
    if (req.method === "GET") {
      handleGetRequest(req, res, parsedUrl);
    }

    if (req.method === "POST") {
      handleGetRequest(req, res, parsedUrl);
    }
    //res.write("Hello from CodeSandbox!"); //write a response to the client
    //res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
