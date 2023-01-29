import React, { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Banner from "./components/ui/banner/Banner";
import Slider from "./components/ui/slider/Slider";
import Button from "./components/ui/button/Button";

const EXAMPLE_USER = {
  name: "Sayen",
  registrationStatus: "verified",
};

export type User = typeof EXAMPLE_USER;

const UserContext = React.createContext("hello");

function App() {
  const sliderRef = useRef();
  const buttonRef = React.useRef<HTMLButtonElement>(null!);

  function logRef() {
    console.log("Captured ref:", buttonRef.current);
  }
  return (
    <UserContext.Provider value={"hello"}>
      <Button ref={buttonRef} onMouseEnter={logRef} onFocus={logRef}>
        Hover or Focus Me
      </Button>
      {/*<Slider label="slider" ref={sliderRef} />*/}
      {/*<Banner type="success" user={EXAMPLE_USER}>*/}
      {/*  Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!*/}
      {/*</Banner>*/}
    </UserContext.Provider>
  );
}

export default App;
