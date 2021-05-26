import React from "react";
import "../css/Main.css";

import Intro from "./Intro";
import Exchahge from "./Exchahge";
import Gallery from "./Gallery";
import Faq from "./Faq";
import Contacts from "./Contacts";
import ArrowTop from "./ArrowTop";

function Main() {
  return (
    <main>
      <Intro />
      <Exchahge />
      <Faq />
      <Gallery />
      <Contacts />
      <ArrowTop />
    </main>
  );
}

export default Main;
