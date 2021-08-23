import React, { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { SliderData } from "./Data/SliderData.js";
import GlobalStyle from "./GlobalStyle";
import DropDown from "./Components/DropDown";
import InfoSection from "./Components/InfoSection";
import styled from "styled-components";
import { InfoData, InfoDataTow } from "./Data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar toggle={toggle} />

      <DropDown isOpen={isOpen} toggle={toggle} />

      <Hero slides={SliderData} />

      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTow} />
    </div>
  );
}

export default App;
