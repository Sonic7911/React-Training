import { useLoaderData } from "react-router-dom";
import { find } from "../Posts";

export function postLoader({params})
{
    const postId = params.id;
    const post = find(postId);
    return post;
}

export default function Post()
{
    const post = useLoaderData();
    return(
        <h1>{post.title}
        </h1>
        
    )
}