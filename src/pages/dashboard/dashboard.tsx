import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import LogoutModal from "@/components/LogoutModal";
import DiogramCharts from "@/components/content/DiogramCharts";
import { Helmet } from "react-helmet";
import { useState } from "react";

const handleLogout = () => {
};

const Dashboard: React.FC = () => {
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>


            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                <div className="flex-1 p-8">
                    <Header title="Dashboard" setShowLogoutModal={setShowLogoutModal} onLogout={handleLogout} />
                    <DiogramCharts />
                    <LogoutModal showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
