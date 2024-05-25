import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-10 py-4 justify-between items-center select-none">
      <div className="font-bold ">
        <p className="text-3xl font-extrabold underline underline-offset-2 cursor-pointer">
          DevDiary
        </p>
      </div>
      <div className="text-lg flex gap-10 items-center font-bold">
        <a href="" className="">
          Home
        </a>
      </div>
    </div>
  );
};

export default Navbar;
