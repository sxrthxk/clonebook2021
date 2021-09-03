import React from "react";
import Image from 'next/image'


const SidebarRow = ({ title, icon, faIcon }) => {
  return (
    <a href="#" className="hover:bg-gray-200 rounded-2xl flex items-center p-2 px-5 transition duration-200">
      {icon && <Image src={icon} width={40} height={40} className="rounded-full" alt="Icon"/>}
      {faIcon && faIcon}
      <h1 className="pl-3 font-semibold">{title}</h1>
    </a>
  );
};

export default SidebarRow;
