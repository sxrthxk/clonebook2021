import React from "react";
import { sidebarlinks } from "../../models/sidebarlinks";
import SidebarRow from "./SidebarRow";
import avi from "../../assets/pngs/noavi.png";
import { FaCaretDown } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="flex flex-col w-80 items-stretch py-3 px-2 m-3 h-full justify-center sticky left-0">
      <SidebarRow icon={avi} title="Baki Hanma" />
      {sidebarlinks.map((sidebaritem, index) => {
        return <SidebarRow key={index} icon={sidebaritem.icon} title={sidebaritem.title} />;
      })}
      <SidebarRow
        faIcon={
          <div className="w-10 h-10 grid place-items-center bg-gray-100 rounded-full">
            <FaCaretDown className="w-5 h-5" />
          </div>
        }
        title="See More"
      />
    </div>
  );
}

export default Sidebar;
