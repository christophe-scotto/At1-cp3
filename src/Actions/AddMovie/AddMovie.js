import { useState } from "react";

import data from '../../data/data';

import './addMovie.css';



const AddMovie = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  

  
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // creation du nouveau film avec les données du formulaire
    if (title !== "") {
      const newMovie = {
        id: data.length,
        title: title,
        rating: rating,
      };
      alert(`nouvelle entrée : 
        nom  : ${newMovie.title}
        Note : ${newMovie.rating} ${newMovie.rating > 1 ? "étoiles" : "étoile"}`);
      
    } else {
      alert("Aucune Info saisie");
    }

    // Réinitialisez les valeurs du formulaire
    setTitle("");
    setRating(0);

    
  };

  return (
    <div className="addMovie-form">
      <h1>Ajouter un Média</h1>
      <form onSubmit={handleSubmit}>
        <div className="addMovie-form--input">
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="addMovie-form--rating">
          <label htmlFor="rating">Note :</label>
          <select id="rating" value={rating} onChange={handleRatingChange}>
            <option value={0}>Sélectionnez une note</option>
            <option value={1}>1 étoile</option>
            <option value={2}>2 étoiles</option>
            <option value={3}>3 étoiles</option>
            <option value={4}>4 étoiles</option>
            <option value={5}>5 étoiles</option>
          </select>
        </div>
        <button className="addMovie-form--Button" type="submit">Submit</button>
        <button className="addMovie-form--Button--cancel" onClick={onClose}>Close</button>
      </form>
    </div>
    
  );
};

export default AddMovie;
