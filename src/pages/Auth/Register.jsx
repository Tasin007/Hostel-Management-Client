import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser, userUpdateProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get('photo');
        const email = form.get("email");
        const password = form.get("password");

        const user = {
            name,
            photo,
            email,
            password,
        }
        console.log(user);

        createUser(email, password)
        .then(res => {
            userUpdateProfile(name, photo)
            .then(res => {
                toast.success('User created successfully');
                navigate('/login');
            })
            .catch(err=>{
                toast.error(err.message);
            });

        })
        .catch(err=>{
            toast.error(err.message);
        });
        
    }
  return (
    <div className="max-w-2xl mx-auto mt-40">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Register</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to='/login'
                className="text-[#4D96B3] decoration-2 hover:underline font-medium"
                
              >
                Log in here
              </Link>
            </p>
          </div>

          <div className="mt-5">

            <form onSubmit={handleRegister}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="text"
                      name="name"
                      className="py-3 px-4 block w-full border rounded-md text-sm focus:border-[#4D96B3] focus:ring-[#4D96B3]"
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Your photo url
                  </label>
                  <div className="relative">
                    <input
                      type="photo"
                      id="photo"
                      name="photo"
                      className="py-3 px-4 block w-full border rounded-md text-sm focus:border-[#4D96B3] focus:ring-[#4D96B3]"
                      required
                      placeholder="Enter your photo url"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border rounded-md text-sm focus:border-[#4D96B3] focus:ring-[#4D96B3]"
                      required
                      placeholder="Enter your email"
                    />
                    
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border rounded-md text-sm focus:border-[#4D96B3] focus:ring-[#4D96B3]"
                      required
                      placeholder="Enter your password"
                    />
                  </div>
                </div>


                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 rounded text-[#4D96B3] focus:ring-[#4D96B3]"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="remember-me" className="text-sm">
                      I accept the{" "}
                      <a
                        className="text-[#4D96B3] decoration-2 hover:underline font-medium"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#4D96B3] text-white hover:bg-[#4D96C5] focus:outline-none focus:ring-2 focus:ring-[#4D96B3] focus:ring-offset-2 transition-all text-sm"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
