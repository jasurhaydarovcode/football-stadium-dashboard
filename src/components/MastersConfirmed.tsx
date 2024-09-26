import { useState } from 'react';
import { Button } from './ui/button';

const MastersConfirmed = () => {
    const [activeTab, setActiveTab] = useState('confirmed');

    const confirmedMasters = [
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
        },
        {
            firstName: "Maste68",
            lastName: "mister68",
            phoneNumber: "+9981610760107"
        },
        {
            firstName: "Maste168",
            lastName: "mister168",
            phoneNumber: "+99811610760107"
        }
    ];

    const notConfirmedMasters = [
        {
            firstName: "Asilbek",
            lastName: "Normuhammadov",
            phoneNumber: "+99811610760107"
        },
        {
            firstName: "Asilbek",
            lastName: "asilbek",
            phoneNumber: "+998908904815"
        }
    ];

    const masters = activeTab === 'confirmed' ? confirmedMasters : notConfirmedMasters;

    return (
        <div>
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
                                                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
                                                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Info</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Confirm</button>
                                                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Reject</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
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
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-400">No data</td>
                                <td className="py-4 px-6 text-gray-400">No data</td>
                                <td className="py-4 px-6 text-gray-400">No data</td>
                                <td className="py-4 px-6 flex space-x-2">
                                    <button className="px-4 py-2 text-white bg-green-500 rounded cursor-not-allowed" disabled>Confirm</button>
                                    <button className="px-4 py-2 text-white bg-red-500 rounded cursor-not-allowed" disabled>Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {masters.length > 0 && (
                    <div className="flex justify-between items-center mt-4">
                        <Button>Previous</Button>
                        <span className="text-sm text-gray-600">1/1</span>
                        <Button>Next</Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MastersConfirmed;
