function DiogramCharts() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {/* Order Count */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Order Count</h2>
                {/* Diagram bo'sh qoladi */}
                <div className="h-48 bg-gray-200"></div>
            </div>

            {/* Total Price */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Total Price</h2>
                {/* Diagram bo'sh qoladi */}
                <div className="h-48 bg-gray-200"></div>
            </div>

            {/* Client Count */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Client Count</h2>
                {/* Diagram bo'sh qoladi */}
                <div className="h-48 bg-gray-200"></div>
            </div>
        </div>
    )
}

export default DiogramCharts