import {Button, Card} from "../../components";
import React, {useState} from "react";
import {usePostCommentsQuery, usePostQuery} from "./hooks";


export const Dependent = () => {
    const [randomPostId, setRandomPostId] = useState(1);
    const {isLoading, error, data, isFetching} = usePostQuery(randomPostId);
    const postId = data?.id;
    const {
        isLoading: commentsLoading,
        error: commentsError,
        data: commentsData,
        isFetching: commentsFetching
    } = usePostCommentsQuery(randomPostId, {enabled: !!postId});
    if (isLoading) return <div>Loading...</div>;

    if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;
    const {id, title, body} = data || {};
    const {comments} = commentsData || {};
    const generateRandomPostId = () => {
        const min = 1, max = 150;
        // find diff
        let difference = max - min;
        // generate random number
        let rand = Math.random();
        // multiply with difference
        rand = Math.floor(rand * difference);
        // add with min value
        rand = rand + min;
        setRandomPostId(rand)
    }
    return (
        <>
            <Card>
                <>
                    <Button title={'Get new Post'} handleClick={generateRandomPostId}/>
                    <h1>#{id} {title}</h1>
                    <p>{body}</p>
                    {commentsLoading ? <strong>Loading comments...</strong> : <ul>
                        {comments?.map((comment: any, index: number) => <li key={index}>{comment.body}</li>)}
                    </ul>}
                    {commentsError && <strong>Error Loading comments...</strong>}
                </>
            </Card>
            <div>{isFetching ? "Updating..." : ""}</div>
        </>
    );
}