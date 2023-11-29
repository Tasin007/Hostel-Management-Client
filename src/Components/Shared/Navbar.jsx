import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // New state
  const [userProfile, setUserProfile] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    setUserProfile({
      name: user?.displayName,
      photo: user?.photoURL,
    });
  }, [user?.displayName, user?.photoURL]);

  return (
    <div>
      <header className="bg-indigo-950 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 lg:px-8" aria-label="Global">
          <div className="flex justify-between items-center py-6 md:justify-start space-x-20 lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/" aria-label="Home">
                <span className="sr-only">HostelHub</span>
                <img
                  className="h-8 w-auto sm:h-10 pl-9"
                  src="https://i.ibb.co/C6S1tLp/Favicon.png"
                  alt="Logo"
                />
                <h1 className="text-xl text-white inline-block ml-2">
                  HostelHub
                </h1>
              </NavLink>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {/* Icon for menu button */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1">
              <NavLink
                to="/"
                className="whitespace-nowrap text-xs lg:text-base font-medium text-white hover:text-red-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/meals"
                className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-white hover:text-red-500"
              >
                Meals
              </NavLink>
              <NavLink
                to="/upcomingmeals"
                className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-white hover:text-red-500"
              >
                Upcoming Meals
              </NavLink>
              <div className="ml-8 relative">
                {/* Font Awesome Notification Icon */}
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-white hover:text-red-500 cursor-pointer"
                />
                
              </div>
              {user?.email ? (
                <div className="ml-8 relative">
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu visibility
                  >
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={userProfile?.photo}
                      alt="User Profile"
                    />
                  </div>
                  <div
                    className={`${
                      isProfileMenuOpen ? "block" : "hidden"
                    } absolute top-0 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="block px-4 py-2 text-xs text-black">
                      {userProfile?.name}
                    </div>
                    <div className="block px-4 py-2 text-xs text-black hover:text-red-500">
                      Dashboard
                    </div>
                    <div
                      className="block px-4 py-2 text-xs text-black hover:text-red-500 cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="ml-8 whitespace-nowrap text-xs lg:text-base font-medium text-white hover:text-red-500"
                >
                  Join Us
                </NavLink>
              )}
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </NavLink>
              <NavLink
                to="/meals"
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              >
                Meals
              </NavLink>
              <NavLink
                to="/upcomingmeals"
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50"
              >
                Upcoming Meals
              </NavLink>
            </div>
            {/* Add more mobile menu items as needed */}
            {user?.email ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={userProfile?.photo}
                      alt="User Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {userProfile?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <NavLink
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="block w-full text-left px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-50"
              >
                Join Us
              </NavLink>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
