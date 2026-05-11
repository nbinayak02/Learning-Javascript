const ChatList = (props) => {
  return (
    <div className="bg-gray-600 max-w-62 w-fit rounded-xl p-3 flex flex-row gap-4 justify-evenly cursor-pointer hover:bg-gray-700 transition-colors">
     
      {/* logo */}
      <div className="w-10 h-10 rounded-full bg-amber-500 text-center leading-10 font-black text-white">
        DC
      </div>

      {/* text  */}
      <div className="w-3/4 md:hidden lg:block">
        <p className="text-xm font-bold text-white">Default Chat</p>
        <p
          className={`truncate text-xs font-bold text-gray-200 overflow-ellipsis ${
            props.isClicked ? `font-normal` : ``
          }`}
        >
          ChatBot: Welcome to chat group.
        </p>
      </div>
    </div>
  );
};

export default ChatList;
