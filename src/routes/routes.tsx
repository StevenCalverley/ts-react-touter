import { createBrowserRouter, Link } from "react-router-dom";
import Posts, { loader as PostsLoader } from "../views/posts/Index";
import Post, { loader as PostLoader } from "../views/posts/Post";
import Root from "../views/Root";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: PostsLoader,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
        loader: PostLoader,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);
