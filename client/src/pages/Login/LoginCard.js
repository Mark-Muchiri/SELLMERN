import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function LoginCard() {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ _, setCookies ] = useCookies([ "access_token" ]);

    const navigate = useNavigate();


    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login",
                {
                    username,
                    password,
                }
            );

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
            navigate(0)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='flex justify-center px-20 pt-20 pb-36'>

            <div class="p-4 w-full max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form
                    onSubmit={onSubmit}
                    class="space-y-6"
                    action="#"
                >
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Login to our platform</h5>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="username"
                            id="floating_user_name"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                            <div>User name</div>
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 grid grid-cols-2 gap-4 place-content-around">
                            <div>Password</div>
                        </label>
                    </div>
                    {/* <div href="/" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <button type="submit" class="">Login to your account</button>
                    </div> */}
                    <div className="flex justify-center">
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    </div>

                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 grid grid-cols-2 gap-52 place-content-between">
                        <div>Not registered?
                            <a href="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Sign Up</a>
                        </div>
                        <div><a href="/#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a></div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginCard;