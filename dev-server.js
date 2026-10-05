const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const pageRoutes = new Set([
  "/", "/home", "/course", "/lessons", "/quick-practice", "/techniques",
  "/body-areas", "/pressure-points", "/routines", "/safety", "/progress", "/reference"
]);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

http.createServer(function (request, response) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch (error) {
    response.writeHead(400).end("Bad request");
    return;
  }

  const isLesson = /^\/(?:lessons|lesson)\/\d+$/.test(pathname);
  const requestedFile = pageRoutes.has(pathname) || isLesson
    ? path.join(root, "index.html")
    : path.resolve(root, "." + pathname);
  if (requestedFile !== root && !requestedFile.startsWith(root + path.sep)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.stat(requestedFile, function (error, stats) {
    if (error || !stats.isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(requestedFile).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    fs.createReadStream(requestedFile).pipe(response);
  });
}).listen(port, "127.0.0.1", function () {
  process.stdout.write("The Craft is running at http://127.0.0.1:" + port + "\n");
});
