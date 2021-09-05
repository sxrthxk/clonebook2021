import React, { useState } from "react";
import Image from 'next/image'
import avi from '../../assets/pngs/noavi.png';
import { FaVideo, FaImage, FaGrin } from 'react-icons/fa';

const InputBox = () => {
  const currUser = "Baki";

  const [formData, setFormData] = useState({});

  const formHandler = () => {
    console.log(data);
  };
  return (
    <div className="w-full my-3 bg-white p-3 rounded-2xl">
      <form onSubmit={formHandler} encType="multipart/form-data">
        <div className="flex my-2">
        <Image className="rounded-full" src={avi} height={40} width={40} alt="No Avatar Image"/>
        <input type="text" className="placeholder-gray-500 ml-2 px-3 py-2 w-5/6 rounded-full focus:outline-none text-sm sm:text-md" placeholder={`What's on your mind, ${currUser}?`} />
        </div>
        <hr/>
        <div className="flex justify-evenly sm:justify-between items-center mt-3">
          <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-full transition-all cursor-pointer">
            <FaVideo className="fill-current text-red-500 h-5 sm:h-6 px-2 w-auto" />
            <span className="text-sm sm:text-md">
            Live Video
            </span>
          </div>
          <div className="flex items-center justify-between hover:bg-gray-300 p-2 rounded-full transition-all cursor-pointer">
            <FaImage className="fill-current text-green-500 h-5 sm:h-6 px-2 w-auto" />
            <span className="text-sm sm:text-md">
            Photo/Video
            </span>
          </div>
          <div className="hidden sm:flex items-center hover:bg-gray-300 p-2 rounded-full transition-all cursor-pointer">
            <FaGrin className="fill-current text-yellow-300 h-6 px-2 w-auto" />
            <span className="text-sm sm:text-md">
            Feeling/Activity
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
