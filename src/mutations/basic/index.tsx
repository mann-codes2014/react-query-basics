import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import React from "react";
import {Button} from "../../components";

const addProduct = async (product: any) => {
    const {data} = await axios.post("https://dummyjson.com/products/add", {...product});
    return data;
}

export const BasicMutation = () => {
    const {mutate, data, isLoading, error, isSuccess} = useMutation(addProduct);

    return (
        <div>
            {isLoading ? (
                'Adding todo...'
            ) : (
                <>
                    {(error instanceof Error) ? (
                        <div>An error occurred: {error.message}</div>
                    ) : null}

                    {isSuccess ? <div>Product #{data?.id} added!</div> : null}

                    <Button
                        handleClick={() => {
                            mutate({title: 'BMW Pencil'})
                        }}
                        title={' Add Product'}
                    />
                </>
            )}
        </div>
    )
}