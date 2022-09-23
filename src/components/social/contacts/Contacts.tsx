import React from "react";
import { useDispatch } from "react-redux";
import SearchContacts from "./SearchContacts";
import { selectContact } from '../redux/actions';

const Contacts = (props: any) => {
  const [selected, setSelected] = React.useState<number>(null!);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  const handleSelect = (index: number, contactName: string) => {
    setSelected(index)
    dispatch(selectContact(contactName))
  }

  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  }

  const contacts: any[] = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];

  const message = "El último mensaje que se envió en este chat de texto";

  return (
    <div className="w-full h-auto bg-gray-200 space-y-1 p-1 overflow-y-scroll">
      <SearchContacts {...{ open, setOpen }} />
      <div
        className="w-full rounded p-2 space-y-1 bg-white hover:bg-gray-100 hover:cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex">
          <span className="material-icons mx-3">search</span>
          <p className="font-semibold pl-2">Search contacts</p>
        </div>
      </div>
      {contacts.length > 0 &&
        contacts.map((contact, index) => (
          <div
            key={index}
            className={classNames(
              "flex w-full h-16 rounded p-2 space-x-2 bg-white hover:bg-gray-100 hover:cursor-pointer",
              selected === index && "ring-2 ring-amber-400"
            )}
            onClick={() => handleSelect(index, contact.name)}
          >
            <img
              src={`https://source.boringavatars.com/beam/50/${contact.name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
              alt="avatar"
              className="rounded-full"
              style={{ width: 50, height: 50 }}
            />
            <div className="max-w-full overflow-hidden">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-gray-600 text-sm">
                {message.length > 30 ? message.slice(0, 30) + "..." : message}
              </p>
            </div>
          </div>
        ))}
      {/* {!contacts.length && <p>No contacts</p>} */}
    </div>
  );
};

export default Contacts;
