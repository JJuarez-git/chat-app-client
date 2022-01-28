import React from "react";
import Chat from "../components/chat/Chat";
import ThemeMode from "../components/ThemeMode";
import User from "../components/User";

const MainApp = (props: any) => {
  const [mode, setMode] = React.useState("");

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleMode = (theme: string) => {
    localStorage.theme = theme;
    setMode(theme);
  };

  return (
    <main>
      <div className="flex flex-col min-h-screen max-h-screen overflow-hidden">
        <div className="flex flex-grow overflow-hidden">
          <div className="flex w-full bg-white dark:bg-neutral-700 border border-gray-300 dark:border-none">
            <section className="w-1/5 p-4 border-r border-gray-200 dark:border-zinc-800">
              <p>Lista usuarios</p>
              <ThemeMode {...{handleMode, mode}} />
              <User />
            </section>

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
