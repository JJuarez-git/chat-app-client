import React from "react";

const Contacts = () => {
  const [selected, setSelected] = React.useState<number>(null!);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const contacts = [
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

  const message = "El ultimo mensaje que se envio en este chat de texto";

  return (
    <div className="w-full h-auto bg-gray-200 space-y-1 p-1 overflow-y-scroll">
      {contacts.map((contact, index) => (
        <div
          key={contact.name}
          className={classNames(
            "flex w-full h-16 rounded p-2 space-x-2 bg-white hover:bg-gray-100 hover:cursor-pointer",
            selected === index && "ring-2 ring-amber-400"
          )}
          onClick={() => setSelected(index)}
        >
          <img
            src={`https://source.boringavatars.com/beam/50/${contact.name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
            alt="avatar"
            className="rounded-full"
          />
          <div className="max-w-full overflow-hidden">
            <p className="font-semibold">{contact.name}</p>
            <p className="text-gray-600 text-sm">
              {message.length > 30 ? message.slice(0, 30) + "..." : message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
