import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  return (
    <main className="border p-2">
      <nav className="flex flex-row items-center justify-between md:justify-between mx-2">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer text-2xl lg:text-3xl h-12 w-max m-0 p-2 text-center text-red-700"
        >
          Fresh <span className="text-orange-700">Mart</span>{" "}
          <span className="text-sm text-gray-400">Admin</span>
        </div>
        <button
          onClick={() => {
            setToken("");
          }}
          className="text-white bg-red-500 p-2 rounded-lg text-[15px] hover:bg-red-600"
        >
          Log out
        </button>
      </nav>
    </main>
  );
};

export default Navbar;
