import Database from "better-sqlite3"
import "./routes/api.js"

const db = new Database("database/pong.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
`)

