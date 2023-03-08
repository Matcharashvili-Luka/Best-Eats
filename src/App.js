import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards";
import Food from "./components/Food/Food";
import Categories from "./components/Categories";
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Invite from './components/Invite';
import Help from './components/Help';

function App() {
  const[favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('best_eats_favorites')) || []);
  const[cart, setCart] = useState(JSON.parse(localStorage.getItem('best_eats_cart')) || []);
  const[cartOpen, setCartOpen] = useState(false);
  const[favoritesOpen, setFaoritesOpen] = useState(false);
  const[nav, setNav] = useState(false);
  const[delivery, setDelivery] = useState(true);
  const[inviteOpen, setInviteOpen] = useState(false);
  const[helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('best_eats_cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('best_eats_favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className='overflow-hidden'>
      <Navbar 
        nav={nav}
        setNav={setNav}
        delivery={delivery}
        setDelivery={setDelivery}
        setCartOpen={setCartOpen}
        setFaoritesOpen={setFaoritesOpen}
        setInviteOpen={setInviteOpen}
        setHelpOpen={setHelpOpen}
      />
      <Hero />
      <Cards />
      <button onClick={() => cart.map((item) => console.log(item.name))}>Hello</button>
      <Food 
        favorites={favorites}
        setFavorites={setFavorites}
        cart={cart}
        setCart={setCart}
      />
      <Categories />
      <Cart 
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <Favorites 
        favorites={favorites}
        setFavorites={setFavorites}
        favoritesOpen={favoritesOpen}
        setFaoritesOpen={setFaoritesOpen}
      />
      <Help 
        helpOpen={helpOpen}
        setHelpOpen={setHelpOpen}
      />
      <Invite 
        inviteOpen={inviteOpen}
        setInviteOpen={setInviteOpen}
      />
    </div>
  );
}

export default App;
