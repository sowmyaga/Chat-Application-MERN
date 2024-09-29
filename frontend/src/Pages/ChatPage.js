import React,{useEffect,useState} from 'react'
import axios from 'axios';
const ChatPage = () => {
    const [chats,setChats]=useState([]);
    useEffect(()=>{
     fetchChatDetails();
    },[])

    const fetchChatDetails=async()=>{
       let {data}=await axios.get("/api/chat");
       setChats(data);
       console.log(data);
    }
    const ChatUi = () => {
   return (
     <>
       {chats.map((item) => (
         <div key={item._id}> {/* Ensure each item has a unique key */}
           {item.chatName}
         </div>
       ))}
     </>
   );
};
  return (
    <div>
     {ChatUi()}
    </div>
  )
}

export default ChatPage
