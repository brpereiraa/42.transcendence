import "./routes/api.js"
import Fastify from "fastify"
import DB from "./database/db.js"
import routes from "./routes/api.js"

const fastify = Fastify({
    logger: true,
})

fastify.decorate("db", new DB())
fastify.register(routes, {prefix: "/api"})

fastify.listen({ port: 3001, host:"0.0.0.0" })
