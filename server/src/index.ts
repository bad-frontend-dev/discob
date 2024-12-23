import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";

const app = express();
const PORT = process.env.SERVER_INTERNAL_PORT || 8000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: `http://frontend:${process.env.CLIENT_INTERNAL_PORT}`,
    },
});

const api = express.Router();

io.on("connection", (socket) => {
    console.log("epic");
    socket.on("something", (thing) => {
        console.log(thing);
    });
});

api.get("/random/:num", (req, res) => {
    const { num } = req.params;
    res.json(Math.floor(Math.random() * parseInt(num)));
});

app.use("/api", api);

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
