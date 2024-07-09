import React from "react";
import Galery from "./Galery.js";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
// import Article from "./Article.js";
import Description from "./Description.js";

export default function Main({}) {
  // const user = React.useContext(CurrentUserContext); 
  return (
    <>
    <div>
      <main className="content"> 
        <Description />
        <Galery />

        {/* <Article /> */}

        
      </main>
    </div>
    </>
  );
}
