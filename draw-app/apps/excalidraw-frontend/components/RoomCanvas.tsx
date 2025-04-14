"use client"

import { WS_URL } from "@/config";
import { useRef, useEffect, useState } from "react"
import  Canvas  from "./Canvas"
import { useRouter } from "next/navigation"

export function RoomCanvas({roomId}:{roomId:string}){

const [socket, SetSocket] = useState<WebSocket | null >(null);
const [error, setError]= useState<string | null>(null)
const [connecting, setConnecting] = useState(true);
const token  = localStorage.getItem('token');
const router =  useRouter();


//checking if the token exists in the localstorage
if(!token){
    setError("Not authenticated. Please login")
    router.push('/signin');
    return;
}


useEffect(()=>{
const ws = new WebSocket(`${WS_URL}?token=${token}`);

ws.onopen = ()=>{
    SetSocket(ws);
    setConnecting(false);

    const data = JSON.stringify({
        type:"join_room",
        roomId
    })
    ws.send(data);
};
ws.onclose=()=>{
    SetSocket(null);
    setConnecting(false)
    setError("Failed to connect. Please check your authentication or try again later.");
}
return () => {
    if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
      // Send leave room message if connected
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: "leave_room",
          roomId
        }));
      }
      ws.close();
    }
  };
}, [roomId, router]);


if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-md">
        {error}
      </div>
    );
  }

  if (connecting || !socket) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mr-3"></div>
        Connecting to server...
      </div>
    );
  }

  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
}