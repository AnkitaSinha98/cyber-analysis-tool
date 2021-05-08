import React ,{useState} from 'react';
import SimpleForm from './SimpleForm';


  const Home = (props) => {
    let [showChat, setShowChat] = useState(false);
  
    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }
      
  
    return(
      <div>

      <div className="Appx">
      <div className="text-8xl text-white-100 font-bold cursive ">Welcome !! </div>
      </div>
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>click to chat </button> 
            : <button className="btn" onClick={() => hideChat()}>click to hide </button>}
        </div>
      </div>  
      </div>
    )
}

export default Home;