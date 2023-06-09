const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log("Socket connected id: ", socket.id);
  socket.on("room:join", (data) => {
    console.log(data, "room:join");
    emailToSocketIdMap.set(data?.email, socket?.id);
    socketidToEmailMap.set(socket?.id, data?.email);
    io.to(room).emit("user:joined", { email, id: socket?.id });
    socket.join(room);
    console.log(emailToSocketIdMap, ":::::", emailToSocketIdMap);

    io.to(socket?.id).emit("room:join", data);
  });
});
