import React from "react";

import { WrapperWhite, WrapperBlack } from "./homepage.styles";

import Carousel from "../../components/carousel/carousel.component";
import About from "../../components/about/about.component";
import GoogleHarta from "../../components/google-map/google-map";

const HomePage = () => (
  <div>
    <WrapperBlack>
      <Carousel />
    </WrapperBlack>
    <br />
    <WrapperWhite>
      <h1>Poze proiecte</h1>
    </WrapperWhite>
    <br />
    <WrapperBlack>
      <About />
    </WrapperBlack>
    <WrapperWhite>
      <GoogleHarta />
    </WrapperWhite>
    <br />
  </div>
);

export default HomePage;
