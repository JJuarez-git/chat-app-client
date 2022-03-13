import React from "react";
import { toast } from "react-toastify";
import ThemeMode from "../ThemeMode";
import Button from "../ui/Button";
import LogOut from "../auth/LogOut";
import { Tab } from "@headlessui/react";

const SocialRoot = (props: any) => {
  return (
    <section className="w-1/5 min-w-fit border-r border-gray-200 dark:border-zinc-800">
      <div className="flex items-center min-h-60 px-4 border-b border-gray-200 dark:border-zinc-800">
        <h1 className="font-semibold text-2xl">Chat app</h1>
      </div>
      <Tab.Group>
        <div className="border-b border-gray-200 dark:border-zinc-800">
          <Tab.List className="">
            <Tab className="w-full md:w-1/2">
              {({ selected }) => (
                <div className={selected ? "border-b-2 border-blue-500 py-3" : ""}>Contacts</div>
              )}
            </Tab>
            <Tab className="w-full md:w-1/2">
              {({ selected }) => (
                <div className={selected ? "border-b-2 border-blue-500 py-3" : ""}>Groups</div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel><ThemeMode /></Tab.Panel>
          <Tab.Panel><LogOut /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>


      
      
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
