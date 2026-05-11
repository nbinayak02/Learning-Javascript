import { useEffect, useState } from "react";
import Message from "./Mesage";
import { useAuth } from "../contexts/AuthContext";
import { useSocket } from "../contexts/SocketContext";

const ChatBox = (props) => {
  const [typing, setTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMsgs] = useState([]);
  const { token } = useAuth();
  const host = "http://localhost:5000";

  // establish socket connection
  const { socket } = useSocket();

  //socket for receiving messages
  useEffect(() => {
    if (!socket) return;

    console.log("IS already connected ", socket.connected);
    console.log("Socket is: ", socket);

    // fetch messsages once connection is successful
    fetchMessage()

    // receive all messages - once the component is mounted
    socket.on("messages", (msgs) => {
      msgs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date().getTime(a.createdAt)
      );
      setReceivedMsgs(msgs);
    });

    //receive recent message - append recent at last
    socket.on("recentMessage", (msgs) => {
      setReceivedMsgs((existingMsgs) => [...existingMsgs, msgs]);
    });

    //receive typing state
    socket.on("typing", (state) => {
      state === true ? appendTyping() : removeTyping();
    });
  }, [socket]);

  const appendTyping = () => {
    const childNode = document.createElement("p");
    childNode.innerHTML = "Someone is typing <div class='loader'></div>";
    childNode.id = "someOneIsTyping";
    childNode.classList.add(
      "h-fit",
      "w-fit",
      "p-2",
      "rounded-xl",
      "text-white",
      "text-[13px]",
      "font-semibold",
      "bg-green-800",
      "flex",
      "flex-row",
      "gap-2",
      "mx-6",
      "mb-2",
      "items-center"
    );
    document.getElementById("chat-box").appendChild(childNode);
  };

  const removeTyping = () => {
    const childNode = document.getElementById("someOneIsTyping");
    if (childNode) document.getElementById("chat-box").removeChild(childNode);
  };

  //socket for sending typing info
  useEffect(() => {
    if (!socket) return;
    {
      typing ? socket.emit("typing", true) : socket.emit("typing", false);
    }
  }, [typing, socket]);

  useEffect(() => scrollToBottom(), [receivedMessages, typing]);

  const scrollToBottom = () => {
    const div = document.getElementById("chat-box");
    div.scrollTop = div.scrollHeight;
  };

  const fetchMessage = async () => {

    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${token}`,
      },
    };

    await fetch(`${host}/chat/`, requestOptions);
    
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: `${message}`,
      }),
    };

    await fetch(`${host}/chat/`, requestOptions);
  };

  return (
    <div className="border-2 border-t-0 border-gray-600 rounded-t-xl">
      {/* top bar  */}

      {/* chat box  */}
      <div
        id="chat-box"
        className="h-[500px] md:h-[540px] bg-gray-900 flex flex-col justify-between overflow-auto rounded-t-xl"
      >
        <div className="bg-transparent sticky top-0 backdrop-blur-lg rounded-t-xl px-3 py-2 flex flex-row gap-3 items-center border-b-2 border-gray-500 ">
          <div
            className=" md:hidden w-10 h-10 leading-5 text-center text-white p-2 text-2xl mr-4 rounded-full hover:bg-[#4ade80] hover:text-black"
            onClick={() => props.openChatList(false)}
          >
            &lt;
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-500 text-center leading-10 font-black text-white">
            DC
          </div>
          <div>
            <p className="text-white font-bold text-xl"> Default Chat</p>
            <div className="text-gray-300 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full inline-block"></div>{" "}
              4 Active Now
            </div>
          </div>
        </div>
        {receivedMessages &&
          receivedMessages.map((m, i) => {
            return (
              <div
                key={i}
                className={`${
                  props.user === m.username.username ? `self-end` : `self-start`
                }`}
              >
                <Message
                  key={i}
                  sender={m.username.username}
                  msg={m.message}
                  timestamp={m.createdAt}
                  user={props.user}
                />
              </div>
            );
          })}
      </div>

      {/* message input box */}
      <div className="border-t-2 border-gray-500">
        <form
          className="flex flex-row justify-evenly items-center"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <input
            type="text"
            placeholder="Your message here"
            value={message}
            className="w-9/12 bg-gray-800 placeholder-gray-400 p-2 outline-0 rounded-xl text-white"
            onFocus={() => setTyping(true)}
            onBlur={() => setTyping(false)}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="submit"
            name="sumbit"
            value="Send"
            className="w-fit md:w-2/12 bg-[#4ade80] m-2 p-2 rounded-xl hover:bg-[#40bd6e] transition-colors text-xm font-semibold cursor-pointer disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
