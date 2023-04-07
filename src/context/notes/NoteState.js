import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
      
      // API call
      const response = await fetch (`${host}/api/notes/fetchallnotes`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        },
      });
      
      const json = await response.json();
      // console.log(json);
      setNotes(json);
    }





    // Add a Note
    const addNote = async (title, description, tag) => {
      
      // API call
      // eslint-disable-next-line
      const response = await fetch (`${host}/api/notes/addnote`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        },
        body: JSON.stringify({title,description,tag})
      });
      
      // console.log("Added");
      const note = await response.json();
      setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = async (id)=> {

      const response = await fetch (`${host}/api/notes/deletenote/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        }
      });
    const json = response.json();
    console.log(json);

      const newNotes = notes.filter((note)=> {
        return note._id!==id;
      })
      setNotes(newNotes);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag)=> {
      
      // API call
      const response = await fetch (`${host}/api/notes/updatenote/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        },
        body: JSON.stringify({title, description, tag})
      });
    // eslint-disable-next-line
    const json = await response.json();
      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let i = 0; i<notes.length; i++){
        const element = newNotes[i];
        if (element._id === id){
          newNotes[i].title = title;
          newNotes[i].description = description;
          newNotes[i].tag = tag;
          break;
        } 
      }
      setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, editNote, deleteNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;