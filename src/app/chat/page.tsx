"use client";
import { useEffect, useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { allMessage, sendMessage } from "@/redux/slice/GetAllMessage";
import Spinner from "@/uiverse/spinner/Spinner";

const Chat = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const { allMessage: messages, isLoading, isError, isErrorMessage } = useSelector(
        (state: RootState) => state.message
    );

    const handleSend = () => {
        if (input.trim() !== "") {
            dispatch(sendMessage(input)); // Dispatch message
            setInput(""); // Clear input after sending
        }
    };

    useEffect(() => {
        dispatch(allMessage());
    }, [dispatch]);

    return (
        <div className="flex h-[99%] w-full bg-gray-900">
            <main className="flex-grow flex flex-col shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 flex items-center justify-between bg-gray-700 shadow-md">
                    <h1 className="text-white font-semibold">User</h1>
                    <div className="flex space-x-4">
                        <CiVideoOn className="text-white text-xl cursor-pointer hover:text-gray-300" />
                        <MdCall className="text-white text-xl cursor-pointer hover:text-gray-300" />
                        <HiDotsVertical className="text-white text-xl cursor-pointer hover:text-gray-300" />
                    </div>
                </div>
           
                {isLoading && <Spinner/>}
                {isError && (
                    <p className="text-red-500 text-center p-4">
                        {isErrorMessage || "Failed to load messages"}
                    </p>
                )}

                <div className="flex-grow p-6 overflow-y-auto space-y-4">
                    {messages.length > 0 ? (
                        messages.map((msg: { text: string; sender: string }, index: number) => (
                            <div
                                key={index}
                                className={`px-4 py-2 rounded-lg max-w-xs ${
                                    msg.sender === "me"
                                        ? "bg-[#ad5431] text-white ml-auto"
                                        : "bg-gray-700 text-white mr-auto"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))
                    ) : (
                        !isLoading && <p className="text-white text-center">No messages found</p>
                    )}
                </div>
                
                <div className="p-4 flex items-center bg-gray-700 shadow-md">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className="ml-3 bg-[#ad5431] text-white px-4 py-2 rounded-lg hover:bg-[#9c4230] transition"
                        onClick={handleSend}
                    >
                        Send
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Chat;
