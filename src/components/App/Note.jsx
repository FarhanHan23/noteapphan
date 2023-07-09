"use client";
import React, { useState } from "react";
import { Pen } from "lucide-react";

export const Note = ({ body, color }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      onPointerEnter={() => setOnHover(true)}
      onPointerLeave={() => setOnHover(false)}
      style={{ background: color }}
      className="relative w-full h-60 p-6 rounded-xl text-xl font-medium tracking-tight"
    >
      <div>{body}</div>
      <div
        className={
          onHover
            ? "absolute opacity-100 transition duration-300 bottom-4 right-4 w-10 h-10 flex justify-center items-center bg-slate-900 text-slate-400 rounded-full"
            : "absolute opacity-0 transition duration-300 bottom-4 right-4 w-10 h-10 flex justify-center items-center bg-slate-900 text-slate-400 rounded-full"
        }
      >
        <Pen size={16} />
      </div>
    </div>
  );
};
