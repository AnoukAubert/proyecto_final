import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import api from './utils/apiMovies';
import auth from './utils/auth.js';
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ImagePopup from "./components/ImagePopup";
import Popular from "./components/Popular.js";

function App() {

  const [cards, setCards] = React.useState([]);
  const [popularCards, setPopularCards] = React.useState([]);
  const [nowPlayingCards, setNowPlayingCards] = React.useState([]);
  const [upcomingCards, setUpcomingCards] = React.useState([]);
  const [topRatedCards, setTopRatedCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);

  React.useEffect(() => {
      //mandas llamar el api y en then guardas las tarjetas en setcards
      api.getPopular().then(data => {
        setCards(data.results)
      })
      api.getNowPlaying().then(data => {
        setNowPlayingCards(data.results)
      })
      api.getUpcoming().then(data => {
        setUpcomingCards(data.results)
      })
      api.getTopRated().then(data => {
        setTopRatedCards(data.results)
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
    {/* <Route path="/now-playing"><NowPlaying /></Route> */}
    <Route path="/popular"><Popular handleZoomClick={handleZoomClick} /></Route> 
    {/* <Route path="/top-rated"><TopRated /></Route>
    <Route path="/upcoming"><Upcoming /></Route> */}
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
