"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="h-16 bg-blue-950 shadow-md">
            <nav className="flex items-center justify-between h-full px-6">
                <div className='flex items-center'>
                
                </div>
                <div>
                    <button 
                        className="rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300 p-2"
                        onClick={() => router.push("/")}>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
