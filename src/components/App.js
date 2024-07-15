import React from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import Popular from "./Popular.js";
import TopRated from "./TopRated.js";
import NowPlaying from "./NowPlaying.js";
import Upcoming from "./Upcoming.js";

function App() {

  const [selectedCard, setSelectedCard] = React.useState([]);
  const [openPopupZoom, setOpenPopupZoom] = React.useState(false);

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
      <Route exact path="/">
    <Main 
    handleZoomClick={handleZoomClick}
    />
    </Route>
    <Route path="/now-playing"><NowPlaying handleZoomClick={handleZoomClick} /></Route>
    <Route path="/popular"><Popular handleZoomClick={handleZoomClick} /></Route> 
    <Route path="/top-rated"><TopRated handleZoomClick={handleZoomClick} /></Route>
    <Route path="/upcoming"><Upcoming handleZoomClick={handleZoomClick} /></Route>
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