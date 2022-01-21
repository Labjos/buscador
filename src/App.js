import "./App.css";

//React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componente
import Header from "../src/components/Header/Header";
import Navigation from "../src/components/Navigation/Navigation";

//diferentes Vistas o paginas!
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
