import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer ({port:8080});

interface user{
    ws: WebSocket,
    userId: String,
    rooms: String[]
}

const users : user[] =[];

function checkUser(token:string):string | null {
    try{
    const decoded = jwt.verify(token,JWT_SECRET);
    if(typeof decoded=="string"){
        return null;
    }

    if(!decoded || !decoded.userId){
        return null;
    }
    return decoded.userId;
    }catch(e){
        return null
    }
}

wss.on('connection', function connection(ws,request){

    const url =request.url;

    if(!url){
        return;
    }
    //here we extracting the JWT token and verifying 
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    const userId = checkUser(token);

    if(userId==null){
        ws.close()
        return null;
    }
   
    users.push({
        userId,
        rooms:[],
        ws
    })



    ws.on('message', async function message(data) {
        let parsedData;
        try {
            if (typeof data !== "string") {
                parsedData = JSON.parse(data.toString());
            } else {
                parsedData = JSON.parse(data);
            }
        } catch (e) {
            console.error("Invalid JSON received:", e);
            return;
        }
    if (parsedData.type === "join_room") {
        const user = users.find(x => x.userId === userId);
        user?.rooms.push(parsedData.roomId);
        console.log("user joined a room");
      }
  

    if(parsedData.type === "leave_room"){
        const user = users.find(x=>x.userId === userId);
        if(!user){
            return;
        }
       
      
        user.rooms = user.rooms.filter(x=>x!== parsedData.roomId);
    }

    console.log("Message received")
    console.log(parsedData);

    if(parsedData.type === "chat"){
        const roomId = parsedData.roomId;
        const message =parsedData.message;

        await prismaClient.chat.create({
            data:{
                roomId:Number(roomId),
                message,
                userId
            }
        })
    
    users.forEach(user=>{
        if(user.rooms.includes(roomId)){
            user.ws.send(JSON.stringify({
                type:"chat",
                message: message,
                roomId
            }))
        }
    })
    }
    });
});