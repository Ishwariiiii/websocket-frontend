import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


interface DashboardChildren {
    children: ReactNode;
}

const Layout: React.FC<DashboardChildren> = ({ children }) => {
    return (

        <div className="h-[100vh] w-[100vw]">
            <div className="h-[10%] bg-blue-950 sticky top-0 z-10">
                <Navbar />
            </div>

            <div className="flex h-[90%]">
                <div className="w-[20%] bg-yellow-800 sticky top-10 z-10">
                    <Sidebar />
                </div>
                <div className="w-[80%] bg-black overflow-auto">
                    {children}
                </div>
            </div>
        </div>

    );
};

export default Layout;
