import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import './utils/apiMovies';
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ImagePopup from "./components/ImagePopup";
import api from "./utils/apiMovies.js"

function App() {

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);

  React.useEffect(() => {
      //mandas llamar el api y en then guardas las tarjetas en setcards
      api.getPopular().then(data => {
        setCards(data.results)
      })
      api.getNowPlaying().then(data => {
        setCards(data.results)
      })
      api.getUpcoming().then(data => {
        setCards(data.results)
      })
      api.getTopRated().then(data => {
        setCards(data.results)
      })
  }, [])

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
    <Navigation />
    <Header />
    <Switch>
      <Route path="/">
    <Main 
    handleZoomClick={handleZoomClick}
    cards={cards}
    />
    </Route>
    </Switch>
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
