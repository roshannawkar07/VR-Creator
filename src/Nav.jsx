import React from "react";

function Nav() {
  return (
    <div>
      <header class="  text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 font-bold hover:text-gray-900">
              <img className=" h-10" src="assets/Logo1.png" alt="" />
            </a>
            <a class="mr-5 hover:text-yellow-500">
              <span>| </span> &nbsp; Home
            </a>
            <a class="mr-5 hover:text-yellow-500">More</a>
            <a class="mr-5 hover:text-yellow-500">Listing</a>
            <a class="mr-5 hover:text-yellow-500">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
