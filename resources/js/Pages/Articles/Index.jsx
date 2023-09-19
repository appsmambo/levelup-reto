import React from "react";
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import SearchComponent from "./SearchComponent";

export default function Index() {
    return (
        <AppLayout>
            <Head title="Articles" />
            <h1 className="text-xl">Search articles</h1>
            <SearchComponent></SearchComponent>
        </AppLayout>

    )
}
