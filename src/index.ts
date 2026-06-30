import { Elysia } from "elysia";

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => ({
    message: "Hello World from ElysiaJS with Bun!",
    status: "online",
  }))
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`);
