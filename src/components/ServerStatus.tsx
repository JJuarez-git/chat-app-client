/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import WebSocketService from "../services/WebSocketService";

const WSService = WebSocketService.instance;
const socket = WSService.socket;

const ServerStatus = (props: any) => {
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    socket.on("connect", () => {
      setStatus(true);
    });

    socket.on("disconnect", () => {
      setStatus(false);
    });
  }, [socket]);

  return (
    <>
      {status && <span className="text-green-500">Connected</span>}
      {!status && <span className="text-red-500">Disconnected</span>}
    </>
  );
};

export default ServerStatus;
