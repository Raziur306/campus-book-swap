import { Server } from "socket.io";
import { server } from "./express.config";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
  pingTimeout: 60000,
});

io.on("connection", () => {
  console.log("Socket io Connected");
});
