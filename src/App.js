import React from "react";
import './App.css';
import './index.css';
import './utils/apiMovies';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ImagePopup from "./components/ImagePopup";

function App() {

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [openPopupZoom, setOpenPopupZoom] = React.useState([]);

  const closePopup = () => {
    setOpenPopupZoom(false);
  };

  const handleZoomClick = (name, link) => {
    setOpenPopupZoom(true);
    setSelectedCard({
      name,
      link,
    });
  };

  return (
    <>
    <div className="app">
   
    <Header />
    <Main 
    handleZoomClick={handleZoomClick}
    cards={cards}
    />

    <Footer />
    <ImagePopup
            selectedCard={selectedCard}
            open={openPopupZoom}
            close={closePopup}
          />
    </div>
    </>
  );
}

export default App;
