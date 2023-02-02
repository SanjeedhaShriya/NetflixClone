import React from "react";
import HeaderWrapper from "./section/HeaderWrapper";
import Navbar from "./section/Navbar";
import Hstyles from "./Header.module.css";
import SigninButton from "./section/SigninButton";
import FeatureWrapper from "./section/FeatureWrapper"; 


function Header({children}) {
    return (
    <HeaderWrapper  className = {Hstyles.headerWrapperHome}/>
    <Navbar className={Hstyles.navbar}>
    <Logo />
    <Navbar />

    );
}
export default Header;