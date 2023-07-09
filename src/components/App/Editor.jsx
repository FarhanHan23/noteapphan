"use client";

import { useState } from "react";
import { DashboardTemplate } from "../Template/DashboardTemplate";
import { Note } from "./Note";
import { notes } from "@/lib/dummy/notes";

export const Editor = () => {
  const [notesData, setNotesData] = useState(notes);
  const [searchText, setSearchText] = useState("");

  const createNote = (color) => {
    const newNotesData = [...notesData];
    const notestLength = newNotesData.length;
    newNotesData.push({
      id: notestLength + 1,
      body: "Note Baru",
      color: color,
    });
    setNotesData(newNotesData);
  };

  return (
    <DashboardTemplate
      onNewNotes={(color) => createNote(color)}
      onSearchChange={(text) => console.log(text)}
    >
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
        {notesData
          .filter((item) => {
            const body = item.body.toLocaleLowerCase();
            const search = searchText.toLocaleLowerCase();
            return body.includes(search);
          })
          .map(({ id, body, color }) => {
            return <Note key={id} body={body} color={color} />;
          })}
      </div>
    </DashboardTemplate>
  );
};
