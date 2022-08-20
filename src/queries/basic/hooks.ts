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
const fetchAllProducts = async (): Promise<Products> => {
    const {data} = await axios.get("https://dummyjson.com/products");
    return data.products;
}
export const useAllProductsQuery = () =>
    useQuery(['allProducts',], fetchAllProducts)