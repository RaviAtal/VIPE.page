import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/Header";
import VipeStudio from "./Components/VipeStudio";
import Long_term from "./Components/Long_term";
import WordPress from "./Components/WordPress";
import Team from "./Components/Team";

function App() {
  return (
    <>
      {/* <Header /> */}
      <VipeStudio />
      <Long_term />
      <WordPress />
      <Team />
    </>
  );
}

export default App;
