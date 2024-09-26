import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";

interface HeaderProps {
    title: string;
    setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ title, setShowLogoutModal }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    return (
        <div className="flex justify-between items-center mb-8 relative">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                <div className="flex items-center gap-2">
                    <div className="text-xl font-semibold">Admin</div>
                    <span className="text-2xl"><FaUserCircle /></span>
                </div>
                <span><IoIosArrowDown /></span>
                {showOptions && (
                    <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg py-2 w-40 z-10">
                        <div className="flex items-center pl-3 hover:bg-gray-100">
                            <span className="text-2xl"><MdAccountCircle /></span>
                            <button className="w-full text-left p-2 font-bold text-lg">Account</button>
                        </div>
                        <div className="flex items-center pl-3 hover:bg-gray-100">
                            <span className="text-2xl"><IoLogOutOutline /></span>
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
    );
};

export default Header;
