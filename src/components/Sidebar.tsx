import { FaUserEdit, FaUsers } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoTerminalOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

interface MenuItem {
    name: string;
    icon: JSX.Element;
    link: string;
}

const Sidebar: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { name: "Dashboard", icon: <IoTerminalOutline />, link: "/dashboard" },
        { name: "Masters", icon: <FaUserEdit />, link: "/masters" },
        { name: "Clients", icon: <FaUsers />, link: "/clients" },
    ];

    return (
        <div className={`bg-white shadow-md ${isSidebarCollapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
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
    );
};

export default Sidebar;
