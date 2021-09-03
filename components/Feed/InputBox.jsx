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
    <div className="w-full m-3 bg-white p-3 rounded-2xl">
      <form onSubmit={formHandler} encType="multipart/form-data">
        <div className="flex my-2">
        <Image className="rounded-full" src={avi} height={40} width={40} />
        <input type="text" className="placeholder-gray-500 ml-2 px-3 py-2 w-5/6 rounded-full" placeholder={`What's on your mind, ${currUser}?`} />
        </div>
        <hr/>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-stretch justify-between hover:bg-gray-300 p-2 rounded-full transition-all">
            <FaVideo className="fill-current text-red-500 h-6 px-2 w-auto" />
            Live Video
          </div>
          <div className="flex items-stretch justify-between hover:bg-gray-300 p-2 rounded-full transition-all">
            <FaImage className="fill-current text-green-500 h-6 px-2 w-auto" />
            Photo/Video
          </div>
          <div className="flex items-stretch justify-between hover:bg-gray-300 p-2 rounded-full transition-all">
            <FaGrin className="fill-current text-yellow-300 h-6 px-2 w-auto" />
            Live Video
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
