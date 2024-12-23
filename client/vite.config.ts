import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import "dotenv/config";

const CLIENT_PORT = parseInt(process.env.CLIENT_EXTERNAL_PORT) || 3000;
const SERVER_PORT = parseInt(process.env.SERVER_INTERAL_PORT) || 8000;
const PORT = parseInt(process.env.CLIENT_INTERNAL_PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact()],
    server: {
        host: "0.0.0.0",
        hmr: {
            clientPort: CLIENT_PORT,
        },
        port: PORT,
        watch: {
            usePolling: true,
        },
        proxy: {
            "/api": `http://backend:${SERVER_PORT}`,
            "/socket.io": `http://backend:${SERVER_PORT}`,
        },
    },
});
