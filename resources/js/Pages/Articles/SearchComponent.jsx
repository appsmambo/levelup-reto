import React from "react";
import { usePage, useForm } from '@inertiajs/react';

export default function SearchComponent() {
    const { title, articles } = usePage().props;
    const { data, setData, post } = useForm({
        title: title,
        articles: articles,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('articles.search'));
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="grid grid-cols-2 grid-rows-1 gap-4">
                    <div>
                        <input
                            type="text"
                            autoFocus
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            placeholder="Ej. Story | Love | World | Big Fish"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)} />
                        &nbsp;
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {title
                    ?
                        <table className="table-auto border-separate border border-slate-500">
                            <thead>
                                <tr>
                                    <th scope="col" className="border border-slate-600">#</th>
                                    <th scope="col" className="border border-slate-600">Title</th>
                                    <th scope="col" className="border border-slate-600">Author</th>
                                    <th scope="col" className="border border-slate-600">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {articles.length > 0
                                ? articles.map((article, i) => (
                                    <tr key={article.id}>
                                        <td className="border border-slate-700">{(i+1)}</td>
                                        <td className="border border-slate-700">{article.title}</td>
                                        <td className="border border-slate-700">{article.author}</td>
                                        <td className="border border-slate-700">{article.year}</td>
                                    </tr>
                                ))
                                : <tr><td className="border border-slate-700" colSpan={4}>No records found</td></tr>
                            }
                            </tbody>
                        </table>
                    :
                        <></>
                }
            </form>
        </>
    )

}
