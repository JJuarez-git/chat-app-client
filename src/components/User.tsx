import React, { FormEvent } from "react";
import WebSocketService from "../services/WebSocketService";

const WSService = WebSocketService.instance;

const User = () => {
  const [input, setInput] = React.useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    WSService.emit("config-user", { username: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default User;
