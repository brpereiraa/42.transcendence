DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    nickname TEXT NOT NULL,
    email TEXT NOT NULL,
    url TEXT NOT NULL,
    password TEXT NOT NULL,
    game INTEGER NOT NULL,
    wins INTEGER NOT NULL
);

INSERT INTO users (name, nickname, email, url, password, game, wins)
VALUES ('admin', 'admin', 'admin@example.com', 'https://example.com', 'admin', 0, 0);
