// import { useState } from "react";
import { Context } from "./Context";
function Provider({children}) {
    return <Context.Provider value={{}} >
        {children}
    </Context.Provider>;
}

export default Provider;