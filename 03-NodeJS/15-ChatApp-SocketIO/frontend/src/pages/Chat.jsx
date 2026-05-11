import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [chatListClick, setChatListClick] = useState(false);
  const { logout, token } = useAuth();
  const navigate = useNavigate();
  const host = "http://localhost:5000";
 

  useEffect(() => {
    fetchUser();
  }, [chatListClick]);

  const handleCloseChatList = (isClicked) => {
    setChatListClick(isClicked);
  };

  const fetchUser = async () => {
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

    const response = await fetch(`${host}/chat/getUser`, requestOptions);
    const r = await response.json();
    if (response.ok) {
      setUser(r.user);
    }
  };

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div className="bg-[#404040] rounded-2xl p-4">
        <div className="flex flex-row justify-evenly">
          {/* sidebar */} 
          <div className={`${chatListClick ? `hidden md:block` : `block`}`}>
            {/* top bar  */}
            <div className="text-white text-2xl font-bold border-l-4 border-[#4ade80] px-3 ">
              Chat
            </div>

            <div className="mt-10">
              {/* chat list  */}
              <div className="w-full md:w-fit lg:w-[250px] h-[68vh] lg:h-[400px] flex flex-col justify-between gap-5 overflow-y-auto">
                <div onClick={() => setChatListClick(true)}>
                  <ChatList isClicked={chatListClick} />
                </div>
              </div>

              {/* logout  */}

              <div>
                <p className="w-fit capitalize text-white font-semibold text-center">
                  {user}
                </p>

                <p
                  className="text-sm w-fit text-center mt-3 text-gray-300 font-normal cursor-pointer py-2 rounded-xl hover:bg-[#4ade80] hover:text-black transition-colors"
                  onClick={() => {
                    logout();
                    navigate("/login", { replace: true });
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>

          {/* chat div  */}
          <div
            className={`w-fit h-fit ${
              chatListClick ? `block` : `hidden`
            } md:block lg:w-[700px] md:h-[600px] md:ml-6 md:border-l-2 border-gray-500 md:pl-6`}
          >
            <ChatBox user={user} openChatList={handleCloseChatList}/>
            {/* {chatListClick ? (
            ) : (
              <p className="text-center leading-[350px] text-gray-400 text-xl font-semibold">
                Select chat to open.
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
