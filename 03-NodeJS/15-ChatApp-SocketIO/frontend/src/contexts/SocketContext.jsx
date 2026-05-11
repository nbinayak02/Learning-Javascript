import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const host = "http://localhost:5000";

  useEffect(() => {
    
    const s = io(host);
    console.log("Socket connection established")
    setSocket(s);

    return () => {
      s.disconnect();
    };

  }, []);

  function disconnectSocket(){
    socket.disconnect()
  }

  return (
    <SocketContext.Provider value={{socket, disconnectSocket}}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
