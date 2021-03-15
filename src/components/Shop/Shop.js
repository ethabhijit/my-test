import React from 'react';
import ShopCard from './ShopCard';
import "./Shop.css";
import shopCard1 from "../../images/shop-card1.png";
import shopCard2 from "../../images/shop-card2.png";
import shopCard3 from "../../images/shop-card3.png";


const Shop = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center">Shop</h2>
      <div className="container shop-container mt-3">
       <ShopCard cardTitle="Barbeque Nation" cardText="Galleria Market, DLF City Phase 4" rating="4.5" price="50% off" desc="unlimited delicious grills at $799" src={shopCard1} />
       <ShopCard cardTitle="Barber Shop" cardText="Galleria Market, DLF City Phase 4" rating="4.5" price="$977" desc="Haircut, and cleaning" src={shopCard2} />
       <ShopCard cardTitle="Effotel" cardText="Galleria Market, DLF City Phase 4" rating="4.5" price="$977" desc="Food and Drinks" src={shopCard3} />
       <ShopCard cardTitle="Barbeque Nation" cardText="Galleria Market, DLF City Phase 4" rating="4.5" price="50% off" desc="unlimited delicious grills at $799" src={shopCard1} />
       
      </div>
    </div>
  );
};

export default Shop;
