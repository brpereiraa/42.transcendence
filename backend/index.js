import "./routes/api.js"
import Fastify from "fastify"
import cors from "@fastify/cors"
import DB from "./database/db.js"
import WSServer from "./sockets.js"
import routes from "./routes/api.js"

const fastify = Fastify({
    logger: true,
})

await fastify.register(cors, {
    origin: true,
})

fastify.decorate("ws", new WSServer())
fastify.decorate("db", new DB())
fastify.register(routes, {prefix: "/api"})

fastify.listen({ port: 3001, host:"0.0.0.0" })
