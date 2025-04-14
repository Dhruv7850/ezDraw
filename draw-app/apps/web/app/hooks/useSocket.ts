import { useEffect, useState } from "react";
import { BACKEND_URL, WS_URL } from "../config";
export function useSocket(){
    const[loading,setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(()=>{
        const ws:WebSocket =new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYWMwZDkxMi1mMjIyLTQzMDEtYjBlOC05MzBkYWQ4YjM2ZDEiLCJpYXQiOjE3NDIyMzQ5ODZ9.Xq6fPZpYk6EwQFBEPsNv_AW_B0jriFkX1KyxV8dP1Tg`);
        ws.onopen =()=>{
            setLoading(false);
            setSocket(ws);
        }
    },[])

    return{
        socket,
        loading
    }
}