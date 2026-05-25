import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-accent text-8xl font-bold mb-4">404</h1>
      <h2 className="text-text-primary text-2xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-text-muted max-w-md mb-8">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved, deleted, or the URL may be incorrect.
      </p>
      <Link
        to="/"
        className="bg-accent text-bg text-sm font-medium px-6 py-3 rounded hover:opacity-80 transition-opacity duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}