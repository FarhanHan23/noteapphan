"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

export const Sidebar = ({ onNewNotes }) => {
  const [onAddMode, setOnAddMode] = useState(false);
  return (
    <aside className="w-[90px] border-r-2 flex flex-col items-center p-8 space-y-8">
      <div className="font-bold">Me.</div>
      <div>
        <div
          onClick={() => setOnAddMode(!onAddMode)}
          className="w-8 h-8 bg-slate-950 text-slate-400 hover:text-slate-100 transition duration-300 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Plus
            className={
              onAddMode
                ? "rotate-45 transition duration-300"
                : "rotate-0 transition duration-300"
            }
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div
            onClick={() => onNewNotes("#4ADE80")}
            className={
              onAddMode
                ? "bg-green-400 w-5 h-5 rounded-full  translate-y-4 transition duration-300 cursor-pointer"
                : "bg-green-400 w-5 h-5 rounded-full -translate-y-6 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          <div
            onClick={() => onNewNotes("#FACC15")}
            className={
              onAddMode
                ? "bg-yellow-400 w-5 h-5 rounded-full translate-y-4 transition duration-300 cursor-pointer"
                : "bg-yellow-400 w-5 h-5 rounded-full -translate-y-16 -z-10 transition duration-300 cursor-pointer"
            }
          ></div>
          {/* <div className="bg-yellow-400 w-5 h-5 rounded-full"></div> */}
        </div>
      </div>
    </aside>
  );
};
