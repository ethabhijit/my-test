import React from "react";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import NavComponent from "./components/Navbar/Nav";
import Category from "./components/Category/Category";
import Shop from "./components/Shop/Shop";
import FooterComponent from "./components/Footer/FooterComponent";

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <CarouselComponent />
      <Category />
      <Shop />
      <FooterComponent />
    </div>
  );
}

export default App;
