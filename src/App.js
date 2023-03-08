import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards";
import Food from "./components/Food/Food";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Categories />
    </div>
  );
}

export default App;
