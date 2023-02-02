import React from "react";

function FeatureWarpper({children, ...restProps}) {

        return (
            <div>
                {...restProps}>{children}

            </div>
        )
    
}
export default FeatureWarpper;