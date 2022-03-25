import React from "react";
import { Tab } from "@headlessui/react";
import Fade from "../ui/Fade";
import ThemeMode from "../ThemeMode";
import LogOut from "../auth/LogOut";
import Contacts from "./contacts/Contacts";

const SocialTabs = () => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab.Group>
      <div className="border-b border-gray-200 dark:border-zinc-800">
        <Tab.List>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full md:w-1/2 py-3",
                selected ? "border-b-2 border-blue-500" : ""
              )
            }
          >
            Contacts
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full md:w-1/2 py-3",
                selected ? "border-b-2 border-blue-500" : ""
              )
            }
          >
            Groups
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <Fade>
            <Contacts />
            {/* <ThemeMode /> */}
          </Fade>
        </Tab.Panel>
        <Tab.Panel>
          <Fade>
            <LogOut />
          </Fade>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default SocialTabs;
