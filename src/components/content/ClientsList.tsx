import { config } from '@/api/token';
import { clientType } from '@/interface/client';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

function ClientsList() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<clientType[] | null>();

    const handleDeleteClick = (): void => {
        setShowModal(true);
    };

    const handleNoClick = (): void => {
        setShowModal(false);
    };
    console.log('salm');
    
    function getData() {
        axios.get(`http://164.92.165.18:8080/api/v1/user/clients/for-admin/list?page=0&size=10`, config)
            .then((res: AxiosResponse) => {
                console.log(res);
                setData(res.data)
            })
            .catch(err => console.log(err));
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    console.log(data);
    
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
                    {data && data.length > 0 && data.map((client: clientType, key) => (
                        <tr key={key}>
                            <td className="px-4 py-2">{client.data.object[0].firstName}</td>
                            <td className="px-4 py-2">{client.data.object[0].lastName}</td>
                            <td className="px-4 py-2">{client.data.object[0].orderCount}</td>
                            <td className="px-4 py-2">{client.data.object[0].phoneNumber}</td>
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

            <div className="flex justify-between items-center mt-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">Previous</button>
                <span>1/3</span>
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
