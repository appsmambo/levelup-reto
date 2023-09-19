import React from "react";
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index() {
    return (
        <>
            <AppLayout>
                <Head title="Products" />
                <h1 className="text-xl">List of products</h1>

            </AppLayout>
        </>
    )
}
