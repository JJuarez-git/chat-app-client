import { Dialog } from "@headlessui/react";
import React from "react";

const SearchContacts = (props: any) => {
  const { open, setOpen } = props;
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search.length > 0) {
      setOpen(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded-md min-w-30em mx-auto overflow-hidden">
          <Dialog.Title className="flex items-center justify-between p-4 bg-gray-200 text-gray-700">
            <p className="text-2xl">Search contacts</p>
            <span className="material-icons hover:cursor-pointer" onClick={() => setOpen(false)}>close</span>
          </Dialog.Title>
          <Dialog.Description className="px-4 py-2">
            <input
              type="text"
              className="w-full h-10 px-4 text-sm border-b border-gray-200 focus:border-amber-400 outline-none"
              value={search}
              onChange={handleSearch}
              placeholder="Type something..."
              autoFocus
            />
            {/* This will permanently deactivate your account
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p> */}
          </Dialog.Description>
          <div className="p-4">
            <button onClick={() => setOpen(false)}>Deactivate</button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchContacts;
