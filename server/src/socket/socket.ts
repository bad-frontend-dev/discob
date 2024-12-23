import { Socket } from "socket.io"

export const initializeSocket = (io: Socket) => {
  io.on("connection", (socket: Socket))
}
