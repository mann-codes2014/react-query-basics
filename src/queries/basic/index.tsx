import {Card} from "../../components";
import React from "react";
import {useAllProductsQuery} from "./hooks";

export const Basic = () => {
    const {isLoading, error, data: products, isFetching} = useAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;
    return (
        <>
            {products?.map((item: any, index: number) => <div key={index}>
                <Card>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </Card>
            </div>)}
            <div>{isFetching ? "Updating..." : ""}</div>
        </>
    );
}