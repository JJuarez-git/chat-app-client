import React from "react";
import { toast } from "react-toastify";
import ThemeMode from "../ThemeMode";
import Button from "../ui/Button";
import LogOut from "../auth/LogOut";
import { Tab } from "@headlessui/react";
import Fade from "../ui/Fade";
import SocialTabs from "./tabs/SocialTabs";

const SocialRoot = (props: any) => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="w-96 min-w-fit border-r border-gray-200 dark:border-zinc-800">
      <div className="flex items-center min-h-60 px-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="font-semibold text-2xl">Chat app</h1>
      </div>
      <SocialTabs />

      {/* <Button
        className="bg-slate-400 py-2 px-4 rounded text-white font-medium"
        disabled
      >
        Boton
      </Button>
      <button
        className="inline-flex bg-red-500 p-2 px-4 rounded-full text-white shadow-md"
        onClick={() => toast("Esto es un mensaje", { type: "success" })}
      >
        Toast
      </button> */}
    </section>
  );
};

export default SocialRoot;
