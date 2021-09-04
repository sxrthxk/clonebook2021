import React from "react";
import { FaCaretDown, FaPlus, FaPlusCircle } from "react-icons/fa";
import SidebarRow from "./Sidebar/SidebarRow";

const Groups = () => {
  return (
    <div className="hidden xl:flex flex-col w-80 items-stretch py-3 px-2 m-3 h-full justify-center sticky top-20 left-0">
      <h1 className="text-lg opacity-70 font-bold"> Group Conversations</h1>
      <SidebarRow
        faIcon={
          <div className="w-10 h-10 grid place-items-center bg-gray-100 rounded-full">
            <FaPlus className="w-5 h-5" />
          </div>
        }
        title="Create New Group"
      />
    </div>
  );
};

export default Groups;
