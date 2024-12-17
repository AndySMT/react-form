import React, { useState } from "react";

const Form = ({ onAddChampion }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddChampion(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Aggiungi un nuovo campione:</label>
      <input
        type="text"
        id="title"
        value={title}
        placeholder="Inserisci il Nome"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Aggiungi
      </button>
    </form>
  );
};

export default Form;
