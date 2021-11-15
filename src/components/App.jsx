import { initializeApp } from "firebase/app"
import { getFirestore, collection, setDoc, deleteDoc, doc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore"
import firebaseConfig from "../config";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  initializeApp(firebaseConfig);
  const db = getFirestore();
  const notesRef = collection(db, "users");

  const [notesData] = useCollectionData(notesRef)

  const handleDelete = async (id) => {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
  };

  function addNote(newNote) {
    if (newNote.title.length === 0 && newNote.content.length === 0) return
    try {
      setDoc(doc(db, "users", newNote.id), newNote ); // add data to database 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
        { notesData && notesData.map(noteItem => 
          <Note 
            id={noteItem.id} 
            key={noteItem.id} 
            title={noteItem.title} 
            content={noteItem.content} 
            deleteNote={handleDelete}
          />
        )}  
      </div>
      <Footer />
    </div>
  );
}

export default App;
