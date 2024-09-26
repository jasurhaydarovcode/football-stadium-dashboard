import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

interface HeaderProps {
    title: string;
    onLogout: () => void;
    setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ title, onLogout }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [showAccountModal, setShowAccountModal] = useState<boolean>(false);

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
                            <button
                                className="w-full text-left p-2 font-bold text-lg"
                                onClick={() => setShowAccountModal(true)}
                            >
                                Account
                            </button>
                        </div>
                        <div className="flex items-center pl-3 hover:bg-gray-100">
                            <span className="text-2xl"><IoLogOutOutline /></span>
                            <button
                                className="w-full text-left p-2 font-bold text-lg"
                                onClick={onLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Account Modal */}
            {showAccountModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-bold mb-6">Account</h2>
                        <form>
                            <div className="mb-4">
                                <input type="text" value="adminbek" className="w-full p-2 border rounded" readOnly />
                            </div>
                            <div className="mb-4">
                                <input type="text" value="adminov" className="w-full p-2 border rounded" readOnly />
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder="Want to change? Write new password" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="text" value="+998908904822" className="w-full p-2 border rounded" readOnly />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    onClick={() => setShowAccountModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                // Add your save logic here
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
