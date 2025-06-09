import Database from "better-sqlite3"
import fs from "fs"
import path from "path"

class DB {
    constructor(){
        this.db = new Database("database/pong.db")

        const _path = path.resolve("database/init.sql")
        const data = fs.readFileSync(_path, "utf-8")

        this.db.exec(data)
    }

    fetchUsers(){
        const stmt = this.db.prepare("SELECT * FROM users")

        const users = stmt.all()

        return users
    }

    createUser(user){
        const stmt = this.db.prepare("INSERT INTO users (name, password) VALUES (?, ?)")
        const status = stmt.run(user.name, user.password)
        return status
    }
}

export default DB;