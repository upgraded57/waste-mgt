import "./chat.css";
import Topbar from "./../../Components/Topbar/Topbar";
import { GoImage } from "react-icons/go";
import { BsFillMicFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const msgBody = document.createElement("p");
    msgBody.textContent = msg;
    const timeHr = new Date().getHours();
    const timeMn = new Date().getMinutes();
    const msgTime = document.createElement("small");
    msgTime.textContent = timeHr + ":" + timeMn;
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.classList.add("sent");
    msgDiv.appendChild(msgBody);
    msgDiv.appendChild(msgTime);
    document.querySelector(".messages").appendChild(msgDiv);
    setMsg("");
  };
  return (
    <>
      <Topbar header="Customer Service" />
      <div className="chat-page">
        <div className="chat-page__time">
          <span>Today</span>
        </div>
        <div className="messages">
          <div className="message received">
            <p>Hello, good morning.</p>
            <small>9:41</small>
          </div>
          <div className="message received">
            <p>I am Customer Service, Is there anything I can help you with?</p>
            <small>9:41</small>
          </div>
          <div className="message sent">
            <p>Hi, I am having problem with placing a order for a pickup</p>
            <small>9:42</small>
          </div>
          <div className="message sent">
            <p>Could you please help me out?</p>
            <small>9:42</small>
          </div>
          <div className="message received">
            <p>Of course....</p>
            <small>9:45</small>
          </div>
          <div className="message received">
            <p>
              Can you tell me the problem you are having? So I can help solve
              it.
            </p>
            <small>9:45</small>
          </div>
        </div>
        <div className="chat-page_form">
          <form onSubmit={sendMessage}>
            <div className="inputfield">
              <input
                type="text"
                placeholder="Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <span>
                <GoImage />
              </span>
            </div>
            <button type="submit">
              {msg.length < 1 ? <BsFillMicFill /> : <FaTelegramPlane />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
