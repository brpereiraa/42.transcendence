const routes = async (fastify, opts) => {
    fastify.get("/", async (req, res) => {
        res.send({message: "Hello world"})
    })
    
    fastify.get("/users", async (req, res) => {
        const users = fastify.db.fetchUsers()
        res.code(200).send(users)
    })
    
    fastify.get("/user/:nickname", async (req, res) => {
        const {nickname} = req.params
        const user = fastify.db.fetchUser(nickname)
        res.code(200).send(user)
    })

    fastify.post("/user", async (req, res) => {
        const user = req.body
        const resp = fastify.db.createUser(user)
        res.code(201).send(resp)
    })

    fastify.post("/auth", async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ error: "Username and password are required" });
        }

        const user = fastify.db.fetchUser(username);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        if (user.password === password) {
            return res.status(200).send({ success: true, message: "Authenticated" });
        } else {
            return res.status(401).send({ error: "Invalid password" });
        }
    });
}

export default routes
