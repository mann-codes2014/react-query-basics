import {Button, Card} from "../../components";
import React, {useState} from "react";
import {useProductsChunkQuery} from "./hooks";

const PAGE_SIZE = 3;
export const Paginated = () => {
    const [page, setPage] = useState(0);
    const {
        isLoading,
        error,
        data: products,
        isFetching,
        isPreviousData
    } = useProductsChunkQuery(page, PAGE_SIZE);

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
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '10px',
            }}>

                <div style={{gridColumn: '2 / span 1'}}><Button title={'Previous'}
                                                                handleClick={() => setPage(old => Math.max(old - 1, 0))}/>
                </div>
                <div style={{gridColumn: '3 / span 1'}}><Button title={'Next'}
                                                                handleClick={() => setPage(page => page + 1)}/></div>
            </div>
        </>
    );
}