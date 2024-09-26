import { useState } from "react";
import { FaUserCircle, FaUserEdit, FaUsers } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline, IoTerminalOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { Helmet } from "react-helmet";
import ClientsList from "@/components/content/ClientsList";

interface MenuItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

const Masters: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { name: "Dashboard", icon: <IoTerminalOutline />, link: "/dashboard" },
        { name: "Masters", icon: <FaUserEdit />, link: "/masters" },
        { name: "Clients", icon: <FaUsers />, link: "/clients" },
    ];

    return (
        <div>
            <Helmet>
                <title>Clients</title>
            </Helmet>

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
                        <h1 className="text-2xl font-bold">Clients</h1>
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
                                <div className="absolute top-10 right-0 bg-white  shadow-md rounded-lg py-2 w-40 z-10">
                                    <div className="flex items-center pl-3 hover:bg-gray-100">
                                        <span className="text-2xl">
                                            <MdAccountCircle />
                                        </span>
                                        <button className="w-full text-left p-2 font-bold text-lg">Account</button>
                                    </div>
                                    <div className="flex items-center pl-3 hover:bg-gray-100">
                                        <span className="text-2xl">
                                            <IoLogOutOutline />
                                        </span>
                                        <button
                                            className="w-full text-left p-2 font-bold text-lg"
                                            onClick={() => setShowLogoutModal(true)}
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <ClientsList />

                    {showLogoutModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <p className="text-xl font-semibold mb-6">Are you sure you want to log out?</p>
                                <div className="flex justify-end gap-4">
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                        onClick={() => setShowLogoutModal(false)}>
                                        No
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    // onClick={() => {
                                    //     setShowLogoutModal(false);
                                    // }}
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Masters;
