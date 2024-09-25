import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiogramCharts = () => {
    // Order Count uchun data
    const orderCountData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Order Count',
                data: [5, 10, 15, 7, 8, 12, 20, 45, 10, 30, 5, 2],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    // Total Price uchun data
    const totalPriceData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Total Price',
                data: [500000, 2000000, 3000000, 400000, 500000, 600000, 700000, 5000000, 1000000, 2000000, 3000000, 400000],
                borderColor: 'green',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    // Client Count uchun data
    const clientCountData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Client Count',
                data: [5, 2, 4, 7, 8, 3, 2, 22, 11, 24, 7, 8],
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Order Count */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Order Count</h2>
                <Line data={orderCountData} />
            </div>

            {/* Total Price */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Total Price</h2>
                <Line data={totalPriceData} />
            </div>

            {/* Client Count */}
            <div className="bg-white p-6 shadow-lg rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Client Count</h2>
                <Line data={clientCountData} />
            </div>
        </div>
    );
};

export default DiogramCharts;
