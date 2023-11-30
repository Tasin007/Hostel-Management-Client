import { useState, useEffect } from 'react';

const AdminProfile = () => {
    const [adminData, setAdminData] = useState({ name: '', email: '', role: '' });
    const [editMode, setEditMode] = useState(false);

    // Dummy data for demonstration. Replace this with an API call to fetch real data.
    useEffect(() => {
        setAdminData({ name: 'Admin Name', email: 'admin@example.com', role: 'Administrator' });
    }, []);

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // Here you will handle the API call to update the admin data
        console.log('Saving data...', adminData);
        setEditMode(false);
        // After successful update, fetch the updated data or simply use the state data
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">Admin Profile</h1>
            <div>
                {editMode ? (
                    <>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input type="text" name="name" value={adminData.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" name="email" value={adminData.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                            <input type="text" name="role" value={adminData.role} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                    </>
                ) : (
                    <>
                        <p><strong>Name:</strong> {adminData.name}</p>
                        <p><strong>Email:</strong> {adminData.email}</p>
                        <p><strong>Role:</strong> {adminData.role}</p>
                        <button onClick={handleEditToggle} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminProfile;
