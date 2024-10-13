export const Notes = ({ notes, setNote }) => {
  function handleDelete(idx) {
    const note = [...notes];
    note.splice(idx, 1);
    setNote([...note]);

    // console.log(idx);
  }
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="font-bold text-lg">{note.title}</h2>
          <p className="mt-2">{note.note}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};


//https://www.youtube.com/watch?v=6l8RWV8D-Yo for complete react course 
//https://stickys-note-app-react.netlify.app/
//https://class3-tailwind-frontend.netlify.app/