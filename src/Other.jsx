import { useState, useEffect } from "react";

function App() {
  // Initialize with localStorage data
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('myNotes');
    return saved ? JSON.parse(saved) : [];
  });
  const [noteText, setNoteText] = useState("");

  // Save to localStorage whenever notes change  
  useEffect(() => {
    localStorage.setItem('myNotes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(), // Unique ID for each note
        text: noteText,
        date: new Date().toLocaleDateString()
      };
      setNotes([...notes, newNote]);
      setNoteText("");
    }
  };

  // Delete function - removes note with matching ID
  const handleDeleteNote = (noteId) => {
    const filteredNotes = notes.filter(note => note.id !== noteId);
    setNotes(filteredNotes);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h1>My Notes App</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          value={noteText}
          onChange={e => setNoteText(e.target.value)}
          placeholder="Add a note..."
          style={{ padding: "10px", marginRight: "10px", width: "300px" }}
        />
        <button onClick={handleAddNote} style={{ padding: "10px 20px" }}>
          Add Note
        </button>
      </div>
      
      <div>
        <h3>Your Notes ({notes.length})</h3>
        {notes.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>
            No notes yet. Add your first note above!
          </p>
        ) : (
          notes.map(note => (
            <div key={note.id} style={{ 
              border: "1px solid #ddd", 
              borderRadius: "5px",
              margin: "10px 0", 
              padding: "15px",
              backgroundColor: "#6d1515ff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "16px", marginBottom: "5px" }}>
                  {note.text}
                </div>
                <small style={{ color: "#666" }}>
                  Added: {note.date}
                </small>
              </div>
              
              <button 
                onClick={() => handleDeleteNote(note.id)}
                style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
                onMouseOver={e => e.target.style.backgroundColor = "#cc0000"}
                onMouseOut={e => e.target.style.backgroundColor = "#ff4444"}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
