import React from "react"
import { BrowserRouter, Navigate } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Nav from "./Nav";
const HomePage = () => {



    return (
        <>
        <Header></Header>
        <BrowserRouter>
            <Nav />
        </BrowserRouter>
        <Menu />
        </>
    )
};

export default HomePage; 