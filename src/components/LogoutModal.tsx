interface LogoutModalProps {
    showLogoutModal: boolean;
    setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ showLogoutModal, setShowLogoutModal }) => {
    if (!showLogoutModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-xl font-semibold mb-6">Are you sure you want to log out?</p>
                <div className="flex justify-end gap-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setShowLogoutModal(false)}>
                        No
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
