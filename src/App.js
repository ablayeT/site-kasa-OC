import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import About from "./page/About ";
import FicheDeLogement from "./page/FicheLogement";
import Error from "./page/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logement/:id" element={<FicheDeLogement />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
