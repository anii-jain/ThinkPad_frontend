import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://localhost:5000";
    const notesInitial = [
        {
            "_id": "6422fa1cdf2bd9b7a8431ee61",
            "user": "641d85247d8a30ff20608587",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-03-28T14:30:52.291Z",
            "__v": 0
          },
          {
            "_id": "6422fa24df2bd9b7a8431ee817",
            "user": "641d85247d8a30ff20608587",
            "title": "My title22",
            "description": "Please wake up early22222222222222",
            "tag": "personal",
            "date": "2023-03-28T14:31:00.743Z",
            "__v": 0
          },
          {
            "_id": "6422fa3fdf2bd9b7a8431eea72",
            "user": "641d85247d8a30ff20608587",
            "title": "he he",
            "description": "yo yo honey singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:27.942Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec72",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431ee7c",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec777",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy 7singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "67422fa50df2bd9b7a8431eec777",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "647722fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422777fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa577770df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          }
    ];
    const [notes, setNotes] = useState(notesInitial);


    // Add a Note
    const addNote = async (title, description, tag) => {
      
      // API call

      const response = await fetch (`${host}/api/notes/addNote`,{
        method: 'POST',
        headers: {
          'Content-Tyoe': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        },
        body: JSON.stringify({title,description,tag})
      });
      
      
      // console.log("Added");
      const note = {
        "_id": "6422fa577770df2bd9b7a8431sdeec",
        "user": "641d85247d8a30ff20608587",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-03-28T14:31:44.911Z",
        "__v": 0
      };
      setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = (id)=> {
      const newNotes = notes.filter((note)=> {
        return note._id!==id;
      })
      setNotes(newNotes);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag)=> {
      
      // API call
      const response = await fetch (`${host}/api/notes/${id}`,{
        method: 'POST',
        headers: {
          'Content-Tyoe': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZDg1MjQ3ZDhhMzBmZjIwNjA4NTg3In0sImlhdCI6MTY3OTY1NjUxOX0.O9-ZTy7dJl-eT9mPsoVkH7D8E0TBAYPc-prC9ZcL6FI"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = response.json();

      // Logic to edit in client
      for (let i = 0; i<notes.length; i++){
        const element = notes[i];
        if (element._id === notes[i]){
          element.title = title;
          element.description = description;
          element.tag = tag;
        } 
      }
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;