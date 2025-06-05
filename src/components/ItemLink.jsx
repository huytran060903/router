import { NavLink } from "react-router-dom";

const ItemLink = ({ icon, href, text }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-4 text-white bg-blue-500/70 rounded-lg py-2 px-2 w-full"
          : "flex items-center gap-4 text-slate-800 hover:bg-blue-500/70 hover:text-white rounded-lg py-2 px-2 w-full"
      }
    >
      {icon}
      <span className="font-semibold">{text}</span>
    </NavLink>
  );
};

export default ItemLink;
