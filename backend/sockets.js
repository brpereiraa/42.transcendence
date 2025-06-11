import { WebSocketServer } from "ws"
import { start_game } from "./game/main.js";

class WSServer {
    constructor(){
        const wss = new WebSocketServer({port: 3002})

        wss.on('connection', function connection(ws) {
        ws.on('error', console.error);

        ws.on('message', function message(data) {
            console.log('received: %s', data);
        });

        ws.on("start_game", start_game)

        ws.on("listening", () => {console.log("dwdda")})

        ws.send('Opened');
        });
    }
}

export default WSServer;