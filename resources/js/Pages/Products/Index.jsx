import React from "react";
import { Head, usePage, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index() {
    const { products } = usePage().props;
    const { data, setData, post } = useForm({
        cart: null
    });

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <AppLayout>
                <Head title="Products" />
                <h1 className="text-xl">List of products</h1>
                <hr />
                <div className="flex flex-wrap mx-4">
                    {products.length > 0
                        ? products.map((product, i) => (
                            <div key={product.id} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div className="relative pb-48 overflow-hidden">
                                        <img className="absolute inset-0 h-full w-full object-cover" src="https://picsum.photos/400" alt="{product.title}" />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="mt-2 mb-2  font-bold">{product.title}</h2>
                                        <p className="text-sm">{product.description}</p>
                                        <div className="my-3 items-start">
                                            <span className="text-sm font-semibold">US$</span>
                                            &nbsp;
                                            <span className="font-bold text-3xl">
                                                {product.price}
                                            </span>
                                            <button onClick={handleClick} value={product.id}
                                                className="bg-orange-400 py-3 px-8 rounded text-sm font-semibold hover:bg-opacity-75 float-right"
                                            >
                                                Agregar al carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : <div className="card">No products found.</div>
                    }
                </div>
            </AppLayout>
        </>
    )
}
