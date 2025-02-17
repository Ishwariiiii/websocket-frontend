"use client";
import { useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: "The deadline for our competition is coming up. We have to finish the concept this week. Can you make a framework now?", sender: "me" },
        { text: "We must succeed!", sender: "me" },
        { text: "Are you serious?", sender: "other" },
        { text: "Asbi, are you finish?", sender: "me" },
        { text: "Not yet, please wait!", sender: "other" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { text: input, sender: "me" }]);
            setInput("");
        }
    };

    return (
        <div className="flex h-[99%] w-full bg-gray-900">
            <main className="flex-grow flex flex-col shadow-lg rounded-lg overflow-hidden">
                {/* Chat Header */}
                <div className="p-4 flex items-center justify-between bg-gray-700 shadow-md">
                    <h1 className="text-white font-semibold">Gabriel Watson</h1>
                    <div className="flex space-x-4">
                        <CiVideoOn className="text-white text-xl cursor-pointer hover:text-gray-300" />
                        <MdCall className="text-white text-xl cursor-pointer hover:text-gray-300" />
                        <HiDotsVertical className="text-white text-xl cursor-pointer hover:text-gray-300" />
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-grow p-6 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "me" ? "bg-[#ad5431] text-white ml-auto" : "bg-gray-700 text-white mr-auto"}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
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


