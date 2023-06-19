import { useState } from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import AddMovie from './Actions/AddMovie/AddMovie';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="App">
        <Header />
        {!showModal && 
          <>
            <Container />
            <button
              className="app-button--addMovie"
              onClick={() => setShowModal(true)}
            >
              Add Movie
            </button>
          </>
        }
        {showModal && (
          <AddMovie onClose={handleCloseModal} />
        )}
      
      </div>
    </>
  );
}

export default App;