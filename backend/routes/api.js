const routes = async (fastify, opts) => {
    fastify.get("/", async (req, res) => {
        res.send({message: "Hello world"})
    })
    
    fastify.get("/users", async (req, res) => {
        const users = fastify.db.fetchUsers()
        res.code(200).send(users)
    })
    
    fastify.post("/user", async (req, res) => {
        const user = req.body
        const resp = fastify.db.createUser(user)
        res.code(201).send(resp)
    })
}

export default routes
