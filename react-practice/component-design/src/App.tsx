import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import styled from "styled-components";
import BreadcrumbPortal, {
  Breadcrumb,
} from "./components/ui/breadcrumb/BreactcrumbPortal";

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
  // return (
  //   <UserContext.Provider value={"hello"}>
  //     <Button ref={buttonRef} onMouseEnter={logRef} onFocus={logRef}>
  //       Hover or Focus Me
  //     </Button>
  //     {/*<Slider label="slider" ref={sliderRef} />*/}
  //     {/*<Banner type="success" user={EXAMPLE_USER}>*/}
  //     {/*  Successfully logged in! Welcome aboard, {EXAMPLE_USER.name}!*/}
  //     {/*</Banner>*/}
  //   </UserContext.Provider>
  // );

  return (
    // <Breadcrumb>
    //   <BreadcrumbItem to="/one">One</BreadcrumbItem>
    //   <BreadcrumbItem to="/two">Two</BreadcrumbItem>
    // </Breadcrumb>
    <>
      <Header>
        <BreadcrumbPortal />
      </Header>
      <Breadcrumb to="/one">One</Breadcrumb>
      <Breadcrumb to="/two">Two</Breadcrumb>
      <div>Content</div>
    </>
  );
}

const Header = styled.header`
  background-color: #eee;
  padding: 10px;
  margin-bottom: 10px;
`;

export default App;
