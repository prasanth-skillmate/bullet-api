import "dotenv/config";
import app from "./app";
import http from "http";

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
