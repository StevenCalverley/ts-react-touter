import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getPost } from "../../services/posts";

export function loader({ params }: LoaderFunctionArgs) {
  return getPost(params.postId as string);
}

function Posts() {
  const post = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <h1 className="font-medium">{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default Posts;
