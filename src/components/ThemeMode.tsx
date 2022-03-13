import React from "react";
import { Listbox } from "@headlessui/react";

const themes = [
  { name: "Light", icon: "light_mode" },
  { name: "Dark", icon: "dark_mode" },
];

const ThemeMode = (props: any) => {
  const [mode, setMode] = React.useState(localStorage.theme || "light");
  const [selectedTheme, setSelectedTheme] = React.useState(themes[0]);

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

  const handleClick = (theme: string) => {
    handleMode(theme);
  };

  return (
    <React.Fragment>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={() => handleClick("dark")}
      >
        <span className="material-icons">dark_mode</span>
      </button>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={() => handleClick("light")}
      >
        <span className="material-icons">light_mode</span>
      </button>
      <p>Current: {mode}</p>

      <Listbox value={selectedTheme} onChange={setSelectedTheme}>
        <Listbox.Label className="block bg-slate-600">Theme Mode</Listbox.Label>
        <div className="relative">
          <Listbox.Button className="flex w-32 items-center justify-between h-10 px-2 rounded-md border border-gray-300 bg-white ">
            <span className="material-icons">{selectedTheme.icon}</span>
            {/* <span>{selectedTheme.name}</span> */}
            <span className="material-icons text-gray-400">unfold_more</span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-32 mt-1 bg-yellow-200">
            {themes.map((theme) => (
              <Listbox.Option key={theme.name} value={theme.name}>
                {theme.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </React.Fragment>
  );
};

export default ThemeMode;
