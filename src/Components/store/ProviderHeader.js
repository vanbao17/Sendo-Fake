import { useState } from "react";
import { Context } from "./Context";
function ProviderHeader({children}) {
    const [dis,setdis] = useState(false)
    return <Context.Provider value={{dis,setdis}} >
        {children}
    </Context.Provider>;
}

export default ProviderHeader;