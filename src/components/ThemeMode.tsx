import React from "react";

const ThemeMode = (props: any) => {
  const { handleMode, mode } = props;

  const handleClick = (theme: string) => {
    handleMode(theme);
  };

  return (
    <>
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
    </>
  );
};

export default ThemeMode;
