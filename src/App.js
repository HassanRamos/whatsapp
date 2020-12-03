import React,{useEffect,useState} from 'react'
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {
const[messages,setMessages] = useState([])

useEffect(() => {
  axios.get('/messages/sync')
  .then(responce=>{
    setMessages(responce.data)
  })
  
}, [])
  useEffect(() => {
    const pusher = new Pusher('89a4f9ced045ae7f0dba', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('insert', function(newMessage) {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)
  return (
    <div className="app">
      <div className='app__body'>
     <Sidebar/>  
     <Chat messages ={messages}/>
     </div>
    </div>
  );
}

export default App;
