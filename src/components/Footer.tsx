import React from "react";
import ServerStatus from "./ServerStatus";

const Footer = () => {
  return (
    <footer className="bg-neutral-600 p-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-right">
          <span className="text-white">Server status:</span> <ServerStatus />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
