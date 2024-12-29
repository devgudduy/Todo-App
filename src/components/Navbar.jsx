import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-around bg-slate-700 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-10 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          Your Task
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
