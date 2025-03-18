import React from "react"
import NavBar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
