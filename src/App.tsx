import React from "react";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";
import './App.css';
import {Card} from "./components";

const queryClient = new QueryClient();

function Queries() {
    const {isLoading, error, data, isFetching} = useQuery(["repo2Data"], () =>
        axios
            .get("https://dummyjson.com/products")
            .then((res: any) => res.data)
    );

    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;
    const {products} = data || {};
    return (
        <div className="container">
            <h1 className="heading">React Query Basics</h1>
            {products?.map((item: any, index: number) => <div key={index}>
                <Card>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </Card>
            </div>)}
            <div>{isFetching ? "Updating..." : ""}</div>
            {/*<ReactQueryDevtools initialIsOpen/>*/}

        </div>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Queries/>
        </QueryClientProvider>
    );
}

export default App;
