import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminProfile from './AdminProfile';
import ManageUsers from './ManageUsers';
// ... import other components

const AdminDashboard = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <div className="flex flex-col w-64 bg-white shadow-xl">
          <div className="p-4 text-gray-700 bg-gray-200">
            <h2 className="text-3xl font-semibold text-center">Admin Panel</h2>
          </div>
          <ul className="flex flex-col p-2">
            <li>
              <Link to="/admin/profile" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                Manage Users
              </Link>
            </li>
            {/* ... other links */}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-10 text-2xl font-bold">
          <Switch>
            <Route path="/admin/profile" component={AdminProfile} />
            <Route path="/admin/users" component={ManageUsers} />
            {/* ... other routes */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
