import React from "react";

const GroupMessage = (props: any) => {
  const { msg } = props;

  return (
    <div className="relative bg-white p-2 pr-10 rounded-md w-fit max-w-2/5 mb-4">
      <div className="flex items-center space-x-2 pr-8">
        <img
          src={`https://source.boringavatars.com/beam/20/jjuarez?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
          alt="avatar"
          className="rounded-full"
        />
        <span className="inline-block text-base font-semibold">{msg.from}</span>
      </div>
      <p className="absolute top-3 right-2 text-xs text-gray-400">
        {msg.time.split(" ")[1]}
      </p>
      <p className="py-1">{msg.text}</p>
      <span className="absolute bottom-0 right-2 material-icons text-xl text-amber-400" title="The contact has received this message">
        done_all
      </span>
    </div>
  );
};

export default GroupMessage;
