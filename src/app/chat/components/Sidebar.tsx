"use client";
import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

const users = [
    { name: "Simon Archalis", message: "Please send me", time: "10 min ago" },
    { name: "Jessica", message: "Hello", time: "30 min ago" },
    { name: "Anastasiya Huta", message: "Have you completed the math quiz?", time: "1 hour ago" },
    { name: "Gea Meita", message: "I don't like robotic", time: "3 hour ago" },
    { name: "Arthur Bond", message: "Ok thanks", time: "4 hour ago" },
    { name: "Melanie Swan", message: "Let me try it", time: "5 hour ago" },
    { name: "Phil Johanson", message: "Yup!", time: "1 day ago" },
    { name: "Sabrina Takia", message: "Of course", time: "1 day ago" },
    { name: "Sia LansiA", message: "Do you join Machine Learning club?", time: "2 day ago" },
];

const Sidebar = () => {
    return (
        <div className="w-80 h-full bg-white shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
                <h1 className="text-lg font-semibold text-black">Recent Chats</h1>
                <button className="text-[#ad5431] hover:text-[hover:bg-[#9c4230]] ">
                    <FaPlus size={18} />
                </button>
            </div>

            {/* Search Box */}
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

            {/* Chat List */}
            <div className="flex-grow overflow-y-auto text-black">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b"
                    >
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black font-semibold">
                            {user.name.charAt(0)}
                        </div>
                        <div className="ml-3 flex-grow">
                            <h2 className="text-sm font-semibold">{user.name}</h2>
                            <p className="text-xs text-gray-500 truncate">{user.message}</p>
                        </div>
                        <span className="text-xs text-gray-400">{user.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
