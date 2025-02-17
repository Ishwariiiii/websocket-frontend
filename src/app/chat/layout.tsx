// "use client";
// import React, { ReactNode } from "react";
// // import Navbar from "./components/Navbar";
// // import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// // import Navbar from "./Navbar";
// // import Sidebar from "./Sidebar";

// interface LayoutProps {
//     children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//     return (
// <div className="h-[100%] w-[100%] flex flex-col bg-gray-950 text-white">

//     {/* Navbar */}
//     <div className="h-[20%] sticky top-0 z-50">
//         <Navbar />
//     </div>

//     {/* Main Content */}
//     <div className="flex flex-grow h-[80%] w-full">

//         {/* Sidebar */}
//         <div className="w-[30%] h-[80%]">
//             <Sidebar />
//         </div>

//         {/* Content */}
//         <div className=" w-[70%] flex-grow p-6 bg-gray-800 overflow-auto">
//             {children}
//         </div>
//     </div>
// </div>


//         <div className="h-[100%] w-[100%] bg-black flex-col">
//             <div className="h-[20%] w-[100%] bg-slate-800">
//                 <Navbar />
//             </div>
//             <div className="h-[80%] w-[100%] flex">
//                 <div className="h-[80%] w-[30%] bg-red-500 ">
//                     <Sidebar />
//                 </div>
//                 <div className="h-[80%] w-[70%] bg-cyan-500">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Layout;

"use client";
import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "../../uiverse/spinner/spinner.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-full flex flex-col bg-gray-900">
            {/* Navbar */}
            <div className="h-[15%] bg-slate-800 shadow-md">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="h-[85%] w-full flex">
                {/* Sidebar */}
                <div className="w-[25%] bg-gray-800 text-white p-4">
                    <Sidebar />
                </div>

                {/* Content */}
                <div className="w-[75%]  p-1 rounded-lg shadow-md sticky overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;

