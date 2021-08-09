import React, { useState } from "react";
import SimpleForm from "./SimpleForm";
import "../src/style.css";
import gsap from "gsap";
import logo1 from "../src/img/font1.gif";
import icon from "../src/chatbot.gif";

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const Home = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div>
      <div className="Appx">
        <div className="text-5xl pt-20 text-white-100 font-bold cursive"></div>
        <div className="ml-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <img src={logo1} alt="logo1" className="myImage" />
        </div>
      </div>
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm></SimpleForm>
        </div>
        <div>
          {!showChat ? (
            <button onClick={() => startChat()}>
              <img
                src={icon}
                alt="icon"
                className="myImage"
                width="50"
                height="50"
              />
            </button>
          ) : (
            <button onClick={() => hideChat()}>
              <img
                src={icon}
                alt="icon"
                className="myImage"
                width="50"
                height="50"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
