import React from "react";
import logo from "../../.."

function Logo({children, ...restProps}) {
    return (
    <div>
        <a href = "/"{...restProps}>
        {children}
        <img src ="../../../assets/logo.svg" alt "Netflix-Logo" className ="logo" />
        </a>
        </div>
    )
}
export default Logo;