import localforage from "localforage";

function set(posts)
{
    localforage.setItem("posts", posts);
}

async function create(post){
    const NewPost = {
        id: Math.random().toString(36).substring(2),
        title: post.title,
        content : post.content,
        created_at: Date.now(),
    };
    console.log(title);
    const posts = await list();
   await set([...posts,NewPost]);
}

async function list()
{
    const posts = await localforage.getItem('posts')
    return posts;
}

async function find(postId)
{
    const posts = await list()
    return posts.filter(function (post){
        return post.id==postId
    })[0];
}

export{
    create,
    list,
    find
}