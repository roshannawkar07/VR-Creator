import React from "react";
import ContactsIcon from "@mui/icons-material/Contacts";

function Nav() {
  return (
    <div>
      <header className=" mb-5 text-gray-600 body-font sticky top-0 z-50 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-5">
            <a className="font-bold hover:text-gray-900">
              <img className="h-10" src="assets/Logo1.png" alt="" />
            </a>
            <a className="relative group text-base font-medium hover:text-yellow-500">
              &nbsp; Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
            <a className="relative group text-base font-medium hover:text-yellow-500">
              More
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
            <a className="relative group text-base font-medium hover:text-yellow-500">
              Listing
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
            <a className="relative group text-base font-medium hover:text-yellow-500">
              Contact &nbsp;
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
            <svg
              class="w-5 h-5 mr-60 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
