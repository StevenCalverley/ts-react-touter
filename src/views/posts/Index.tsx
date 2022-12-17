import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getPosts } from "../../services/posts";

export function loader() {
  return getPosts();
}

function Posts() {
  const posts = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <h1 className="text-lg font-medium">Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h2 className="text-brand-600 underline">{post.title}</h2>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Posts;
