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
              Contact &nbsp; <ContactsIcon />
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
