import { useState } from "react";
import { FaUserCircle, FaUsers, FaUserTag } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoTerminalOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DiogramCharts from "../../components/DiogramCharts";

const Dashboard = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showOptions, setShowOptions] = useState(false); // Logout uchun holat

    const menuItems = [
        { name: "Dashboard", icon: <IoTerminalOutline />, link: "/dashboard" },
        { name: "Masters", icon: <FaUserTag />, link: "/masters" },
        { name: "Clients", icon: <FaUsers />, link: "/clients" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-white shadow-md ${isSidebarCollapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
                {/* Sidebar Burger icon */}
                <div className="flex justify-end cursor-pointer">
                    <div className="p-4 font-bold text-3xl" onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
                        <HiMenuAlt2 />
                    </div>
                </div>
                <ul className="space-y-4 mt-4">
                    {menuItems.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <li className="flex items-center gap-4 text-xl font-bold p-4 hover:bg-gray-200 cursor-pointer">
                                <div className="flex justify-center items-center text-2xl w-12">
                                    {item.icon}
                                </div>
                                {!isSidebarCollapsed && <span>{item.name}</span>}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 relative">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                        <div className="flex items-center gap-2">
                            <div className="text-xl font-semibold">Admin</div>
                            <span className="text-2xl">
                                <FaUserCircle />
                            </span>
                        </div>
                        <span>
                            <IoIosArrowDown />
                        </span>

                        {/* Logout Option */}
                        {showOptions && (
                            <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg py-2 w-40 z-10">
                                <button className="w-full text-left p-2 hover:bg-gray-100">Logout</button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4 justify-end">
                    <label htmlFor="open" className="font-bold">Enter Year: </label>
                    <input
                        type="text" id='open'
                        placeholder="2024"
                        className="shadow-sm my-3 border-none p-2 rounded"
                    />
                </div>

                <DiogramCharts />
            </div>
        </div>
    );
};

export default Dashboard;
