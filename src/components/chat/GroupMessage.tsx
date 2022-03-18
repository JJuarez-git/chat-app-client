import React from "react";

const GroupMessage = (props: any) => {
  const { msg } = props;

  return (
    <div className="relative bg-white p-3 pr-10 rounded-md w-fit max-w-2/5 mb-4">
      <div className="flex items-center space-x-2">
        <img
          src={`https://source.boringavatars.com/beam/20/jjuarez?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
          alt="avatar"
          className="rounded-full"
        />
        <p className="space-x-3">
          <span className="inline-block text-base font-semibold">
            {msg.from}
          </span>
          <span className="inline-block text-xs text-gray-400">
            {msg.time.split(" ")[1]}
          </span>
        </p>
      </div>
      <p>{msg.text}</p>
      <span className="absolute bottom-0 right-2 material-icons text-gray-300 text-xl">
        done_all
      </span>
    </div>
  );
};

export default GroupMessage;
