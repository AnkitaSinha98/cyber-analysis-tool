import React ,{useState} from 'react';
import SimpleForm from './SimpleForm';
import "../src/style.css";
import gsap from "gsap";


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

  const Home = (props) => {
    let [showChat, setShowChat] = useState(false);
  
    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }
      
    return(
      <div>
     <div className="Appx">
     <div className="text-8xl pt-20 text-white-100 font-bold cursive">Welcome !!</div>

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