import { list} from "../Posts"

import { useLoaderData, Link } from "react-router-dom";
import moment from "moment/moment";

export async function fetch()
{
    const posts = await list();
    if(!posts)
    {
        return [];
    }
    return posts.map(function(post){

        return{
            ...post,
            created_at : moment(post.created_at).fromNow(),
            created_at : moment(post.created_at).
            format("MMM Do YYYY")
            }
    }
    )

}

export default function Home() {

const posts = useLoaderData();



    return (
        <>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {
                    posts.map(n=>
                    {
                        return(
                        <li className="post">
                        <Link to={`/post/${n.id}`}>
                        
                            <date>{n.created_at}</date>
                            <span>{n.title}</span>
                            </Link>
                    </li> 
                        )
                    })
                }
            </ul>
        </>
    )
}