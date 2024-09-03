import React from "react";
import Animation1 from "./Animation";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";
import Animation4 from "./Animation4";

const HeaderAnimation = ({ind}) =>  {
    switch (ind) {
        case 1: return <Animation1/>;
        case 2: return <Animation2/>
        case 3: return <Animation3/>
        case 4: return <Animation4/>
    }
}

export default HeaderAnimation;