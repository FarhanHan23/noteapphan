"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { SearchBar } from "../App/SearchBar";

export const DashboardTemplate = ({ children, onNewNotes, onSearchChange }) => {
  return (
    <main className="flex h-screen">
      <Sidebar onNewNotes={(color) => onNewNotes(color)} />
      <section className="w-[calc(100vw-90px)] p-6 space-y-8">
        <SearchBar onSearchChange={(text) => onSearchChange(text)} />
        <div>{children}</div>
      </section>
    </main>
  );
};
