"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBell, FaPhone, FaVideo } from "react-icons/fa6";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="h-full flex items-center justify-between px-6 bg-slate-700 text-white shadow-md">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="/user-avatar.png"
          className="w-12 h-12 rounded-full border-2 border-green-500"
          alt="User Avatar"
        />
        <div>
          <p className="font-semibold">User Name</p>
          <p className="text-[#ad5431] text-sm">Online</p>
        </div>
      </div>

      {/* Icons */}
      {/* <div className="flex space-x-4">
        <FaPhone className="cursor-pointer hover:text-gray-400 transition" />
        <FaVideo className="cursor-pointer hover:text-gray-400 transition" />
        <FaBell className="cursor-pointer hover:text-gray-400 transition" />
      </div> */}

      {/* Logout Button */}
      <button
        className="px-4 py-2 bg-[#ad5431] text-white rounded-lg hover:bg-[#9c4230] transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;