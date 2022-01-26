import React from "react";

const GroupMessage = (props: any) => {
  const { msg } = props;

  return (
    <div className="bg-white p-3 rounded-md space-y-1 w-fit max-w-2/5 mb-4">
      <p className="space-x-3">
        <span className="inline-block text-base font-medium">{msg.from}</span>
        <span className="inline-block text-sm text-gray-400">
          {msg.time.split(" ")[1]}
        </span>
      </p>
      <p>{msg.text}</p>
    </div>
  );
};

export default GroupMessage;
