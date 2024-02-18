import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const logout = () => {
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 300)
    }

    return (


        <nav class="bg-green-800 border-gray-200 dark:bg-blue-500">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">SUTHANAI S.</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bl rounded-lg bg-blue-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-800 dark:bg-blue-500 md:dark:bg-blue- dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 text-black bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-white" aria-current="page"><Link to="/admin">Home</Link></a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/admin/product">Product</Link></a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/admin/sale">Sale</Link></a>
                        </li>
                        <li>
                            <button onClick={logout} className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded'>ออกจากระบบ</button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
};

export default Header;
