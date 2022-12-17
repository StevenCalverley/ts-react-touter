interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data: Post[] = await res.json();
  return data;
}

export async function getPost(postId: string): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const res = await fetch(url);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data: Post = await res.json();
  return data;
}
