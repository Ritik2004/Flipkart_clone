import React,{useState} from 'react'

import { Configuration, OpenAIApi } from "openai";

import './button.css'



const configuration = new Configuration({
    // organization:"org-ykbSvNiaSIO6cjZl5uFCUlCe",
    // apiKey: "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"
    organization: process.env.REACT_APP_ORGANIZATION,
    apiKey:process.env.REACT_APP_API_KEY
    
});



const openai = new OpenAIApi(configuration);


const ChatBot = () => {
   
    

    const[message, setMessage] = useState("");
    const[chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e, message) => {
           e.preventDefault();
           setIsTyping(true)

           let msgs = chats
           msgs.push({role:"user", content:message })
           setChats(msgs);
           setMessage("");
         
       await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages :[
            {
                role: "system",
                content: "You are in chat. Help in getting products"
            },
            ...chats
        ],
       }).then((result)=>{
        msgs.push(result.data.choices[0].message);
        setChats(msgs)
        
        setIsTyping(false)

       
       }).catch(error => console.log(error))
    }

    return (
    <div id="chat-box">
      <h1>Chat Box</h1>
      <section >
        {
            chats && chats.length ? (
               chats.map((chat, index)=>(
                <p key={index} className= {chat.role == "user" ? "user_msg":"asst_msg"}>
                  <span>{chat.role}</span>
                  <span>:</span>
                  <span>{chat.content}</span>
                </p>
               ))
            ) : ""
        }
      </section>
    <div className={isTyping ?"":"hide"}>
        <p className='type'>
            <i>Typing</i>
        </p>
    </div>
      <form onSubmit={e => chat(e, message)}
      action="">
      <input type='text'
      name="message" 
      value={message}
       placeholder='Type here...'
       className='input-box'
      onChange={e => setMessage(e.target.value)}

       />
      </form>
    </div>

  )
}

export default ChatBot
