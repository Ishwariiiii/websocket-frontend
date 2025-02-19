"use client";

import React, { useEffect } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { allMessage } from "@/redux/slice/GetAllMessage";
import { AppDispatch, RootState } from "@/redux/store";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { allMessage: messages, isLoading, isError, isErrorMessage } = useSelector(
    (state: RootState) => state.message
  );

  useEffect(() => {
    dispatch(allMessage());
  }, [dispatch]);

  return (
    <div className="w-80 h-full bg-white shadow-lg flex flex-col">
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h1 className="text-lg font-semibold text-black">Recent Chats</h1>
        <button className="text-[#ad5431] hover:bg-[#caa9a2] p-2 rounded-full">
          <FaPlus size={20} />
        </button>
      </div>

      <div className="px-4 py-3">
        <div className="bg-gray-100 text-gray-600 rounded-lg px-3 py-2 flex items-center">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search chat"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto text-black">
        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        {isError && <p className="text-center text-red-500">{isErrorMessage}</p>}

        {!isLoading && !isError && messages.length > 0 ? (
          messages.map((msg: any, index: number) => (
            <MessageItem key={index} message={msg} />
          ))
        ) : (
          <p className="text-center text-gray-500">No messages found</p>
        )}
      </div>
    </div>
  );
};

const MessageItem: React.FC<{ message: any }> = ({ message }) => {
  const senderName = message?.sender?.username || "Unknown";
  const messageText = message?.text || "No message content";

  return (
    <div className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black font-semibold">
        {senderName.charAt(0).toUpperCase()}
      </div>
      <div className="ml-3 flex-grow">
        <h2 className="text-sm font-semibold">{senderName}</h2>
        <p className="text-xs text-gray-500 truncate">{messageText}</p>
      </div>
    </div>
  );
};

export default Sidebar;
