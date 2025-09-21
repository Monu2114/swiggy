import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-gray-100">
      <div className="flex flex-col items-center border-2 p-4 w-80 bg-white rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl p-4 m-2">Contact Us</h1>
        <form className="flex flex-col w-full">
          <input
            type="text"
            className="p-2 m-2 border border-black rounded-lg"
            placeholder="name"
          />
          <input
            type="text"
            className="p-2 m-2 border border-black rounded-lg"
            placeholder="email"
          />
          <input
            type="text"
            className="p-2 m-2 border border-black rounded-lg"
            placeholder="message"
          />
          <button className="w-fit p-2 m-2 border self-center border-black rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
