import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6422fa1cdf2bd9b7a8431ee6",
            "user": "641d85247d8a30ff20608587",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-03-28T14:30:52.291Z",
            "__v": 0
          },
          {
            "_id": "6422fa24df2bd9b7a8431ee8",
            "user": "641d85247d8a30ff20608587",
            "title": "My title22",
            "description": "Please wake up early22222222222222",
            "tag": "personal",
            "date": "2023-03-28T14:31:00.743Z",
            "__v": 0
          },
          {
            "_id": "6422fa3fdf2bd9b7a8431eea",
            "user": "641d85247d8a30ff20608587",
            "title": "he he",
            "description": "yo yo honey singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:27.942Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          },
          {
            "_id": "6422fa50df2bd9b7a8431eec",
            "user": "641d85247d8a30ff20608587",
            "title": "he heaaa",
            "description": "yo yo yo yoy oy oy oy oy oy oy singgggggh",
            "tag": "public",
            "date": "2023-03-28T14:31:44.911Z",
            "__v": 0
          }
    ];
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;