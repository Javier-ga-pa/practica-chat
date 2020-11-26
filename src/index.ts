import express from "express";
import socketio from "socket.io";
import {Request, Response} from "express";
import path from "path";
const app = express();

app.set('port', 5000);

app.listen(app.get('port'), () => {
    console.log('server is running');
    
});


const server = app.listen(app.get("port"), function(){
    console.log("listening on *:5000");
    
});

let io = new socketio.Server(server);


io.on("connection", function(socket:any){
    console.log("an user connected");
    
});

app.get("/", (req: any, res: any ) => {
    res.sendFile(path.resolve("./index.html"));
});
