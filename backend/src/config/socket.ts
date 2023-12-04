import { Server } from "socket.io";
import { server } from "./express.config";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected");
});

export { io };
