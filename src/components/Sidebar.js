import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-64 h-screen bg-slate-100 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Panel </h2>
      </div>
      <nav className="mt-4">
        <Link to="/admin" className="block px-4 py-2 hover:bg-slate-300">
          Dashboard
        </Link>
        <Link to="/users" className="block px-4 py-2 hover:bg-slate-300">
          Users
        </Link>
        <Link to="/about" className="block px-4 py-2 hover:bg-slate-300">
        About
        </Link>
      </nav>
    </div>
    

  );
}

