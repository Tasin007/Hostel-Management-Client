import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for might have been removed or does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
