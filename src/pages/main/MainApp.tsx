import React from "react";
import Chat from "../../components/chat/Chat";
import SocialRoot from "../../components/social/SocialRoot";
import WebSocketService from "../../services/WebSocketService";
import { useAuth } from "../authentication/Authentication";

const MainApp = (props: any) => {
  
  const WSService = WebSocketService.instance;
  const user = useAuth().user;

  React.useEffect(() => {
    WSService.emit("config-user", {
      email: user.email,
      username: user.displayName,
    });
  }, []);

  return (
    <main>
      <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
        <div className="flex flex-grow overflow-hidden">
          <div className="flex w-full bg-white dark:bg-neutral-700 border border-gray-300 dark:border-none">
            <SocialRoot />

            <section className="w-full bg-gray-100 dark:bg-neutral-800">
              <Chat />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainApp;
