import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/Header";
import VipeStudio from "./Components/VipeStudio";
import Long_term from "./Components/Long_term";
import WordPress from "./Components/WordPress";
import Team from "./Components/Team";
import FeaturedOn from "./Components/FeaturedOn";
import Integer from "./Components/Integer";

function App() {
  return (
    <>
      <Header />
      <FeaturedOn />
      <Integer />
      <VipeStudio />
      <Long_term />
      <WordPress />
      <Team />
    </>
  );
}

export default App;
