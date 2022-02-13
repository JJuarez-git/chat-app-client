/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent } from "react";
import WebSocketService from "../../services/WebSocketService";
import GroupMessage from "./GroupMessage";
import { useAuth } from '../../pages/authentication/Authentication';
import { User } from "firebase/auth";

const WSService = WebSocketService.instance;
const socket = WSService.socket;

interface Message {
  from?: string;
  to?: string;
  text: string;
  time: string;
}

const Chat = (props: any) => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [text, setText] = React.useState("");
  const user: User = useAuth().user

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    WSService.emit("send-message", {
      from: user.displayName,
      text,
      to: "Anyone",
      time: new Date().toLocaleString(),
    });
    setText("");
  };

  React.useEffect(() => {
    const msgSubscription = WSService.listen("new-message").subscribe((msg) => {
      let temp = messages;
      temp.push(msg);
      setMessages([...temp]);
    });

    return () => {
      msgSubscription.unsubscribe();
    };
  }, [socket]);

  const AlwaysScrollToBottom = () => {
    const elementRef = React.createRef<HTMLDivElement>()
    React.useEffect(() => elementRef.current?.scrollIntoView({behavior: "smooth"}));
    return <div ref={elementRef} />;
  };

  return (
    <div className="h-full flex flex-col justify-between space-y-4">
      <div className="p-4 bg-white dark:bg-neutral-700 border-b border-b-gray-200 dark:border-b-zinc-800">
        <p>Nombre de usuario</p>
      </div>

      <div className="flex-grow px-4 h-full overflow-y-scroll">
        {messages.map((msg, index) => (
          <GroupMessage key={index} msg={msg} />
        ))}
        <AlwaysScrollToBottom />
      </div>

      <div className="p-3 mt-0 border-t border-t-gray-200 bg-white dark:bg-neutral-700 dark:border-t-zinc-800">
        <form className="flex space-x-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="flex-grow rounded-full p-2 pl-6 bg-gray-100 dark:bg-neutral-800 outline-1 outline-amber-400 text-black dark:text-neutral-300"
            placeholder="Type something..."
          />
          <button
            type="submit"
            disabled={text.length === 0}
            className="flex bg-amber-400 py-3 px-4 text-white rounded-xl hover:bg-amber-500 disabled:bg-amber-300 disabled:cursor-no-drop"
            title="Send message"
          >
            <span className="material-icons">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
