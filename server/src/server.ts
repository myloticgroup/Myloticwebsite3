import { app } from "./app.js";
import { connectDatabase } from "./config/database.js";
import { config } from "./config/env.js";

async function startServer() {
  // Connect to MongoDB
  await connectDatabase();

  const server = app.listen(config.port, () => {
    console.info(`==================================================`);
    console.info(`  Mylotic Express API Server Running on port ${config.port}`);
    console.info(`  Environment: ${config.nodeEnv}`);
    console.info(`  API Base URL: http://localhost:${config.port}/api`);
    console.info(`==================================================`);
  });

  const shutdown = async (signal: string) => {
    console.info(`\n[Server] Received ${signal}. Gracefully shutting down...`);
    server.close(() => {
      console.info("[Server] HTTP server closed.");
      process.exit(0);
    });
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

startServer().catch((err) => {
  console.error("[Server] Fatal startup error:", err);
  process.exit(1);
});
