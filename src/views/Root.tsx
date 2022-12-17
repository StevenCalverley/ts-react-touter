import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header className="p-4 bg-brand-600">
        <h1 className="text-brand-100 text-2xl font-medium">My App</h1>
        <nav className="text-brand-100 flex space-x-2">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>
      <main className="bg-gray-50 flex-grow">
        <div className="container mx-auto pt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Root;
