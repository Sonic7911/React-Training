import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home,{fetch} from "./Route/Home";
import Root from "./Route/Root";
import About from "./Route/About";
import Post, { postLoader } from "./Route/Post";
import NewPost, { submitPost } from "./Route/NewPost";
import "./App.css";
export default function App()
{
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Root />,
      children: [
        {
          path : '/',
          element: <Home />,
          loader: fetch
        },
      
        {
          path :'/about',
          element :<About />
        },
        {
          path :'/new',
          element: <NewPost />,
          action: submitPost,
        },
        {
          path: '/post/:id',
          element: <Post />,
          loader: postLoader
        }
      ]
    }
  ]
  )
  return(
    <RouterProvider router = {router}/>
  )
}
