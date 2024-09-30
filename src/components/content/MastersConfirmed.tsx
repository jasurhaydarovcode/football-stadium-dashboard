import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Master {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const MastersConfirmed = () => {
    const [activeTab, setActiveTab] = useState<string>('confirmed');
    const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
    const [masterToDelete, setMasterToDelete] = useState<Master | null>(null);

    const [confirmedMasters, setConfirmedMasters] = useState<Master[]>([
        {
            firstName: "Maste268",
            lastName: "mister268",
            phoneNumber: "+998908904815"
        },
        {
            firstName: "Asilbek",
            lastName: "Normuhammadov",
            phoneNumber: "+998908740204"
        },
        {
            firstName: "Nmsefese 332222www31",
            lastName: "Lat 3refNa22wwwme 3312422",
            phoneNumber: "2223532222221"
        }
    ]);

    const [notConfirmedMasters, setNotConfirmedMasters] = useState<Master[]>([
        {
            firstName: "Asilbek",
            lastName: "Normuhammadov",
            phoneNumber: "+99811610760107"
        }
    ]);

    const masters: Master[] = activeTab === 'confirmed' ? confirmedMasters : notConfirmedMasters;

    const handleInfo = (master: Master) => {
        setSelectedMaster(master);
    };

    const handleDeleteClick = (master: Master) => {
        setMasterToDelete(master);
    };

    const confirmDelete = () => {
        if (masterToDelete) {
            if (activeTab === 'confirmed') {
                setConfirmedMasters(prev => prev.filter(master => master.phoneNumber !== masterToDelete.phoneNumber));
            } else {
                setNotConfirmedMasters(prev => prev.filter(master => master.phoneNumber !== masterToDelete.phoneNumber));
            }
            setMasterToDelete(null);
        }
    };

    const cancelDelete = () => {
        setMasterToDelete(null);
    };

    return (
        <div>
            {/* Tabs */}
            <div className="mb-4 ml-1 flex gap-4">
                <button
                    className={`text-lg p-2 rounded-lg transition duration-300 ease-in-out ${activeTab === 'confirmed' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
                    onClick={() => setActiveTab('confirmed')}
                >
                    Confirmed Masters
                </button>
                <button
                    className={`text-lg p-2 rounded-lg transition duration-300 ease-in-out ${activeTab === 'notConfirmed' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
                    onClick={() => setActiveTab('notConfirmed')}
                >
                    Not Confirmed Masters
                </button>
            </div>

            {/* Master List */}
            <div className="p-6 bg-white shadow-md rounded-lg">
                {masters.length > 0 ? (
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">First Name</th>
                                <th scope="col" className="py-3 px-6">Last Name</th>
                                <th scope="col" className="py-3 px-6">Phone Number</th>
                                <th scope="col" className="py-3 px-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {masters.map((master, index) => (
                                <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                                    <td className="py-4 px-6">{master.firstName}</td>
                                    <td className="py-4 px-6">{master.lastName}</td>
                                    <td className="py-4 px-6">{master.phoneNumber}</td>
                                    <td className="py-4 px-6 flex space-x-2">
                                        {activeTab === 'confirmed' ? (
                                            <>
                                                <button
                                                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                                    onClick={() => handleDeleteClick(master)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                                    onClick={() => handleInfo(master)}
                                                >
                                                    Info
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Confirm</button>
                                                <button
                                                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                                    onClick={() => handleDeleteClick(master)}
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-gray-400 text-center">No data available.</div>
                )}

                {/* Pagination (if needed) */}
                {masters.length > 0 && (
                    <div className="flex justify-between px-4 items-center mt-4">
                        <Button>Previous</Button>
                        <span className="text-sm text-gray-600">1/1</span>
                        <Button>Next</Button>
                    </div>
                )}
            </div>

            {/* Info Modal */}
            {selectedMaster && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Master Information</h2>
                        <p><strong>First Name:</strong> {selectedMaster.firstName}</p>
                        <p><strong>Last Name:</strong> {selectedMaster.lastName}</p>
                        <p><strong>Phone Number:</strong> {selectedMaster.phoneNumber}</p>
                        <div className="mt-4 flex justify-end">
                            <Button onClick={() => setSelectedMaster(null)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete User modal */}
            {masterToDelete && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                        <p>Are you sure you want to delete <strong>{masterToDelete.firstName} {masterToDelete.lastName}</strong>?</p>
                        <div className="mt-6 flex justify-end space-x-4">
                            <Button className='bg-gray-200 hover:bg-gray-400' variant="secondary" onClick={cancelDelete}>No</Button>
                            <Button color="red" onClick={confirmDelete}>Yes, I'm sure</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MastersConfirmed;
