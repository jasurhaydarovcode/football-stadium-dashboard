// src/pages/Clients.tsx
import React from "react";
import Layout from "@/components/Layout";
import ClientsList from "@/components/content/ClientsList";

const Clients: React.FC = () => {
    return (
        <Layout title="Clients">
            <ClientsList />
        </Layout>
    );
};

export default Clients;
