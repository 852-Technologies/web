import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, isAbsolute, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../", import.meta.url)));
const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

function respond(response, status, message) {
  response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  response.end(message);
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    respond(response, 405, "Method not allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  } catch {
    respond(response, 400, "Invalid URL");
    return;
  }

  if (pathname.split(/[\\/]/).some((segment) => segment.startsWith("."))) {
    respond(response, 404, "Not found");
    return;
  }

  let filePath = resolve(root, `.${pathname}`);
  const relativePath = relative(root, filePath);
  if (relativePath.startsWith(`..${sep}`) || relativePath === ".." || isAbsolute(relativePath)) {
    respond(response, 403, "Forbidden");
    return;
  }

  try {
    const fileInfo = await stat(filePath);
    if (fileInfo.isDirectory()) {
      filePath = resolve(filePath, "index.html");
    }

    const fileInfoToServe = await stat(filePath);
    if (!fileInfoToServe.isFile()) {
      respond(response, 404, "Not found");
      return;
    }

    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Length": content.length,
      "Content-Type": mimeTypes.get(extname(filePath).toLowerCase()) ?? "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      respond(response, 404, "Not found");
      return;
    }

    console.error(`Unable to serve ${pathname}:`, error);
    respond(response, 500, "Internal server error");
  }
});

server.listen(4173, "127.0.0.1", () => {
  console.log("Serving the website at http://127.0.0.1:4173");
});
