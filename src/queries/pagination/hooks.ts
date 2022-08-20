import axios from "axios";
import {useQuery} from "@tanstack/react-query";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
type Products = ReadonlyArray<Product>
const fetchProductsChunk = async (limit: number, skip: number): Promise<Products> => {
    const {data} = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return data.products;
}
export const useProductsChunkQuery = (page: number, pageSize: number) =>
    useQuery(['productsChunk', page, pageSize], () => fetchProductsChunk(pageSize, pageSize * page), {keepPreviousData: true})