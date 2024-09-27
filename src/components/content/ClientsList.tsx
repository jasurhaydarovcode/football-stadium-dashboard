import { useState } from 'react';

interface Client {
    firstName: string;
    lastName: string;
    orderCount: number;
    phoneNumber: string;
}

const clients: Client[] = [
    {
        firstName: 'Muhammadyusuf',
        lastName: 'Temirov',
        orderCount: 21,
        phoneNumber: '+998919517335'
    }
];

function ClientsList() {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleDeleteClick = (): void => {
        setShowModal(true);
    };

    const handleNoClick = (): void => {
        setShowModal(false);
    };

    return (
        <div className="bg-white px-4 py-5">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-white">
                        <th className="px-4 py-2 text-left">First Name</th>
                        <th className="px-4 py-2 text-left">Last Name</th>
                        <th className="px-4 py-2 text-left">Order Count</th>
                        <th className="px-4 py-2 text-left">Phone Number</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{client.firstName || '---'}</td>
                            <td className="px-4 py-2">{client.lastName || '---'}</td>
                            <td className="px-4 py-2">{client.orderCount}</td>
                            <td className="px-4 py-2">{client.phoneNumber}</td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={handleDeleteClick}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center px-4 mt-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">Previous</button>
                <span>1/1</span>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">Next</button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold">Are you sure you want to delete this item?</h3>
                        <div className="mt-4 flex justify-end space-x-4">
                            <button
                                onClick={handleNoClick}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                No
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClientsList;
