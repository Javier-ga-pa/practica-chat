import express from "express";
import socketio from "socket.io";
import path from "path";
const app = express();

app.set('port', 8080);
app.get("/", (req: any, res: any ) => {
    res.sendFile(path.resolve("./index.html"));
});

const server = app.listen(app.get("port"), () => {
    console.log(`listening on ${app.get('port')}`);
    
});

let io = new socketio.Server(server);


io.on("connection", (socket:any) => {

    console.log("An user connected");

    socket.on('message', (message: any) => {

        io.emit('message', message);

    })
    
});
