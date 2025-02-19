"use client";
import Arrow from "@/uiverse/arrow/Arrow";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();


  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="h-full flex items-center justify-between px-6 bg-slate-700 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="/user-avatar.png"
          className="w-12 h-12 rounded-full border-2 border-green-500"
          alt="User Avatar"
        />
        <div>
          {/* <p className="font-semibold">user</p>
          <p className="text-[#ad5431] text-sm">Online</p> */}
          <h1 className="text-3xl">Chat Station</h1>
        </div>
      </div>

      <button 
        className="px-4 py-2 text-white rounded-lg transition"
        onClick={handleLogout} 
      >
        
      </button>
      {/* <Arrow/> */}
    </div>
  );
};

export default Navbar;
