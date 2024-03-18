import React, { useState } from "react";

const Modal = ({ hideModal }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleCancel = () => {
    setIsVisible(false);
    hideModal();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleDone = () => {
    if (name && url) {
      const newData = { name, url };
      localStorage.setItem(name, JSON.stringify(newData));
      setName("");
      setUrl("");
      handleCancel();
    }
  };

  return (
    <form
      className={`absolute left-[32%] top-[30%] mx-auto ${isVisible ? "block" : "hidden"} w-[36%] rounded-lg bg-white`}
    >
      <div className="px-5 pb-6 pt-5">
        <h2 className="mb-4 text-[#202124]">New shortcut</h2>
        <label htmlFor="naming" className="block text-[12px] text-[#5F6368]">
          Name
          <input
            type="text"
            id="naming"
            value={name}
            onChange={handleNameChange}
            className="mt-2 w-full rounded-lg border-b-2 bg-[#e0e0e0] px-2 py-[6px] text-[#202124] outline-none active:border-[#1a73e8]"
          />
        </label>
        <label htmlFor="url" className="mt-4 block text-[12px] text-[#5F6368]">
          URL
          <input
            type="text"
            id="url"
            value={url}
            onChange={handleUrlChange}
            className="mt-2 w-full rounded-lg border-b-2 bg-[#e0e0e0] px-2 py-[6px] text-[#202124] outline-none active:border-[#1a73e8]"
          />
        </label>
      </div>
      <div className="flex items-center justify-end gap-2 p-4">
        <button
          className="rounded-md border border-[#dadce0] bg-white px-4 py-2 text-[13px] text-[#1a73e8]"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          disabled={name === "" || url === ""}
          className="rounded-md border border-[#dadce0] bg-white px-4 py-2 text-[13px] text-[#1a73e8] disabled:border-[#F1F3F4] disabled:bg-[#F1F3F4] disabled:text-[#36464d]"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default Modal;
