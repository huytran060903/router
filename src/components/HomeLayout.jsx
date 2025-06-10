import { Outlet } from "react-router-dom";
import EviziLogo from "../assets/images/evizi_logo.jpg";
import { BiLogoUnity } from "react-icons/bi";
import { FcInspection } from "react-icons/fc";
import ItemLink from "./ItemLink";
import { SiFramework } from "react-icons/si";
import { MdOutlineTaskAlt, MdEmail } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { FaRegBuilding, FaUsers, FaRegFilePdf } from "react-icons/fa";
import { FaMapLocation, FaLocationDot } from "react-icons/fa6";
import React, { useContext } from "react";


import { UserContext } from "../context/UserContext";
const linksNavigation = [
  {
    href: "units",
    text: "Units",
    icon: <BiLogoUnity size={27} />,
  },
  {
    href: "inspections",
    text: "Inspections",
    icon: <FcInspection size={27} />,
  },
  {
    href: "workorders",
    text: "Work Orders",
    icon: <SiFramework size={27} />,
  },
  {
    href: "tasks",
    text: "Tasks",
    icon: <MdOutlineTaskAlt size={27} />,
  },
  {
    href: "reports",
    text: "Reports",
    icon: <HiDocumentReport size={27} />,
  },
  {
    href: "notifications",
    text: "Notifications",
    icon: <IoIosNotifications size={27} />,
  },
  {
    href: "companies",
    text: "Companies",
    icon: <FaRegBuilding size={27} />,
  },
  {
    href: "regions",
    text: "Regions",
    icon: <FaMapLocation size={27} />,
  },
  {
    href: "locations",
    text: "Locations",
    icon: <FaLocationDot size={27} />,
  },
  {
    href: "users",
    text: "Users",
    icon: <FaUsers size={27} />,
  },
  {
    href: "pdftemplates",
    text: "PDF Templates",
    icon: <FaRegFilePdf size={27} />,
  },
  {
    href: "emailtemplates",
    text: "Email Templates",
    icon: <MdEmail size={27} />,
  },
];

const HomeLayout = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex overflow-y-auto">
      <div
        className="fixed top-0 bottom-0 left-0 p-8 flex flex-col  bg-slate-500 px-3 py-6 gap-1 items-center
      overflow-y-auto"
      >
        <img src={EviziLogo} className="w-28 h-16 text-center" />

        {linksNavigation.map((item) => (
          <ItemLink
            key={item.href}
            href={item.href}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="absolute left-48 right-0 p-8 ">
        <div className="flex  justify-end w-full border-b-[1px] text-lg font-semibold">
          UserRole: {user.role}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
