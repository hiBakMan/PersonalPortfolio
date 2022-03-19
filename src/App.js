import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";
import AboutBox from "./components/AboutBox";
import PortfolioBox from "./components/PortfolioBox";
import ContactBox from "./components/ContactBox";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {

  const [ loading, setLoading ] = useState(true);

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ?
        <LoadingScreen
        setLoading={setLoading}
        key="loader"
        />:
      <div className="App">
        <NavBar key="navbar"/>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="personalportfolio/" element={<AboutBox />} />
          <Route path="personalportfolio/portfolio" element={<PortfolioBox />} />
          <Route path="personalportfolio/contact" element={<ContactBox />} />
        </Routes>
        </AnimatePresence>
      </div>}
    </AnimatePresence>
  );
}

export default App;
