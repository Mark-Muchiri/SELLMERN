import 'flowbite';
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

 
function signinNav() {

  return (
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
  );
}

export default signinNav;