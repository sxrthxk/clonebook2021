import React from "react";
import { FaFacebook, FaHome, FaUserFriends, FaUser, FaSearch } from "react-icons/fa";
import { UserCircleIcon, HomeIcon } from '@heroicons/react/solid'

export const Header = () => {
  return (
    <header className="flex justify-between w-full px-3 shadow-2xl sticky z-10 bg-white top-0">
      <div className="flex items-center my-2">
        <FaFacebook className="h-11 w-11 fill-current text-blue-700" />
        <div className="bg-gray-100 flex items-center space-x-2 ml-3 rounded-full">
        <FaSearch className="m-3.5 lg:ml-3 fill-current text-gray-500"/>
        <input
          type="text"
          placeholder="Search CloneBook"
          className="hidden lg:flex bg-transparent placeholder-gray-500 p-2 rounded-full focus:outline-none"
        />
        </div>
      </div>

      <div className="hidden md:flex items-center w-100">
        <a className="h-full border-b-2 border-solid border-blue-600 " href="">
        <HomeIcon className="h-full fill-current text-blue-600 w-10 mx-10" />
        </a>
        <FaUserFriends className="fill-current text-blue-600 w-10 h-10 mx-10" />
      </div>

      <div className="flex justify-between items-center my-2">
        <input
          type="text"
          placeholder="Find Friends"
          className="hidden lg:flex bg-gray-100 placeholder-gray-800 p-2 rounded-full mx-3"
        />
        {/* <FaUser className="w-10 h-10 p-2 bg-gray-200 rounded-full"/> */}
        <UserCircleIcon className="h-10 fill-current text-gray-400"/>
        <h1 className="hidden md:block px-2">CurrUser</h1>
      </div>
    </header>
  );
};
