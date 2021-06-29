require("dotenv").config();
const proxy = require("redbird")({ port: 8000, xfwd: false, bunyan: false });
const server = require("./source/server");

const PORT = process.env.PORT;
const PROXY_PORT = process.env.PROXY_PORT;

proxy.register(`localhost:${PROXY_PORT}`, `http://127.0.0.1:${PORT}`);
proxy.register(`localhost:${PROXY_PORT}/api`, `http://127.0.0.1:8020`);

server();
