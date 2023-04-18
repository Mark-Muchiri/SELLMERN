import 'flowbite';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import {
    // Dropdown,
    // Avatar,
    Navbar,
    Flowbite,
    DarkThemeToggle,
} from 'flowbite-react';

import {
    // DropdownItem
} from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';



function BaseNavbar() {
    const [ cookies, setCookies ] = useCookies([ "access_token" ]);
    // const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        // navigate("/");
    };
    return (
        <>
            {cookies.access_token ?
                <div>

                    {/* ================================ FLOWBITE THEME ================================ */}
                    <Flowbite
                        theme={{
                            theme: {
                                alert: {
                                    color: {
                                        primary: 'bg-prim--location=globalary'
                                    }
                                }
                            }
                        }}
                    >
                        <div className="relative">
                            <div
                            // className="fixed top-0 left-0 right-0"
                            >
                                <Navbar
                                    fluid={true}
                                    rounded={true}
                                >
                                    <Navbar.Brand href="/">
                                        <img
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            className="mr-3 h-6 sm:h-9"
                                            alt="Flowbite Logo"
                                        />
                                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                            Sellme
                                        </span>
                                    </Navbar.Brand>
                                    <div class="flex items-center md:order-2">
                                        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                            <span class="sr-only">Open user menu</span>
                                            <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="user pic" />
                                        </button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                            <div class="px-4 py-3">
                                                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                            </div>
                                            <ul class="py-2" aria-labelledby="user-menu-button">
                                                <li>
                                                    <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                                </li>
                                                <li>
                                                    <a href="/productForm" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Add product</a>
                                                </li>
                                                <li>
                                                    <Link to="/cart" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cart</Link>
                                                </li>
                                                <li>
                                                    <a href="/" onClick={logout} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                            <span class="sr-only">Open main menu</span>
                                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <div className="">
                                            <DarkThemeToggle />
                                        </div>
                                    </div>
                                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                                        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">

                                            <li>
                                                <Link to="/welcome" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                            </li>
                                            <li>
                                                <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Store</a>
                                            </li>
                                            <li>
                                                <Link to="/contacts" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/about" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </Flowbite>
                </div >
                :
                <div>

                    {/* ================================ FLOWBITE THEME ================================ */}
                    <Flowbite
                        theme={{
                            theme: {
                                alert: {
                                    color: {
                                        primary: 'bg-prim--location=globalary'
                                    }
                                }
                            }
                        }}
                    >
                        <div className="relative">
                            <div
                            // className="fixed top-0 left-0 right-0"
                            >
                                <Navbar
                                    fluid={true}
                                    rounded={true}
                                >
                                    <Navbar.Brand href="/">
                                        <img
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            className="mr-3 h-6 sm:h-9"
                                            alt="Flowbite Logo"
                                        />
                                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                            Sellme
                                        </span>
                                    </Navbar.Brand>
                                    <div className="flex md:order-2">
                                        {/* <Loggedin /> */}
                                        <Link to="/login" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Login / Sign Up
                                            </span>
                                        </Link>
                                        <div className="">
                                            <DarkThemeToggle />
                                        </div>
                                    </div>
                                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                                        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">

                                            <li>
                                                <Link to="/welcome" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Store</Link>
                                            </li>
                                            <li>
                                                <Link to="/contacts" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/about" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </Flowbite>
                </div >
            }
        </>
    );
}

export default BaseNavbar;