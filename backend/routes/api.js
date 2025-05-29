import Fastify from "fastify"

const fastify = Fastify({
    logger: true,
})

fastify.get("/", async (req, res) => {
    res.send({message: "Hello world"})
})

fastify.listen({ port: 3000 })
