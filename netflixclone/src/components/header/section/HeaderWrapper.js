import React from "react";

function HeaderWrapper ({children, ...restProps}) {
    return(
        <header {...restProps}>{children}</header>
    )
}