import axios from "axios";
import {useQuery} from "@tanstack/react-query";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number
}


const fetchPost = async (id: number): Promise<Post> => {
    const {data} = await axios.get(`https://dummyjson.com/posts/${id}`);
    return data;
}
export const usePostQuery = (id: number) =>
    useQuery(['post', id], () => fetchPost(id))

const fetchPostComments = async (id: number) => {
    const {data} = await axios.get(`https://dummyjson.com/posts/${id}/comments`);
    return data;
}
export const usePostCommentsQuery = (id: number, options: object) =>
    useQuery(['comments', id], () => fetchPostComments(id), options)