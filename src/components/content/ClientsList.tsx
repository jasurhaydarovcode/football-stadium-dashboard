import { apiUrl } from '@/api/api';
import { config } from '@/api/token';
import { clientType } from '@/interface/client';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClientsList() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<clientType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

    const handleDeleteClick = (clientId: string): void => {
        setSelectedClientId(clientId);
        setShowModal(true);
    };

    const handleNoClick = (): void => {
        setShowModal(false);
        setSelectedClientId(null);
    };

    const handleDelete = (): void => {
        if (selectedClientId) {
            axios.delete(`${apiUrl}/api/v1/user/${selectedClientId}`, config)
                .then(() => {
                    setData((prevData) => prevData?.filter(client => client.id !== selectedClientId) || null);
                    toast.success('Client deleted successfully!');
                    setShowModal(false);
                    setSelectedClientId(null);
                })
                .catch(err => {
                    console.error('Deletion error:', err);
                    setError('Error deleting client.');
                    toast.error('Error deleting client.');
                });
        }
    };

    function getData() {
        setLoading(true);
        axios.get(`${apiUrl}/api/v1/user/clients/for-admin/list?page=0&size=10`, config)
            .then((res: AxiosResponse) => {
                console.log('API response:', res.data);
                setData(res.data.data.object);
                setLoading(false);
            })
            .catch(err => {
                console.error('API call error:', err);
                setError('Error loading data.');
                toast.error('Error loading data.');
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-10">{error}</div>;
    }

    return (
        <div className="bg-white px-4 py-5">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-white">
                        <th className="px-4 py-2 text-left">First Name</th>
                        <th className="px-4 py-2 text-left">Last Name</th>
                        <th className="px-4 py-2 text-left">Phone Number</th>
                        <th className="px-4 py-2 text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((client: clientType) => (
                            <tr key={client.id}>
                                <td className="px-4 py-2">{client.firstName}</td>
                                <td className="px-4 py-2">{client.lastName}</td>
                                <td className="px-4 py-2">{client.phoneNumber}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDeleteClick(client.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-4 py-2 text-center">No Users Found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

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
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClientsList;
