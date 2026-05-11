import { useEffect, useState } from "react";
import getDuration from "../utilities/Date";

const Message = (props) => {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    setDuration(getDuration(props.timestamp));
  }, [props]);

  return (
    <div className="m-4 ">
      <div className="flex flex-row items-center">
        <p className="text-[14px] px-2 text-gray-200 capitalize">
          {props.sender}
        </p>
        <p className="text-[11px] font-semibold px-2 text-gray-400">
          {duration}
        </p>
      </div>
      <div
        className={`h-fit  max-w-full p-2  rounded-xl transition-colors text-white ${
          props.user === props.sender ? `bg-blue-600 hover:bg-blue-700` : `bg-gray-500 hover:bg-gray-600`
        }`}
      >
        {props.msg}
      </div>
    </div>
  );
};

export default Message;
