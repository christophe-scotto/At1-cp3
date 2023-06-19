import DeleteMovie from '../../Actions/DeleteMovie';

import data from '../../data/data';
import './container.css';

const Container = () => {
  
    const getStars = (note) => {
    const stars = [];
    for (let i = 0; i < note; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return stars;
  };

  const movies = data.map(movie => (
    <div className="container-content" key={movie.id}>
      <p className="title">{movie.title}</p>
      <div className="container-content--button">
        <p className="stars">{getStars(movie.rating)}</p>
      </div>
        <button className="movies-button--delete" onClick={() => DeleteMovie(movie.id)} >Delete</button>
    </div>
  )); 
  
   
  return (
    <>
      <div className="container">
        {movies}
      </div>
      
    </>
  );
};

export default Container;

