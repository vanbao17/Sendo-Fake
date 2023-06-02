import { useEffect, useState } from "react";
import { Context } from "./Context";
function Provider({children}) {
    const [showGototop,setshowGototop] = useState(false)
    useEffect(()=>{
        const totop = () => {
            if(document.body.scrollTop > 500 ||document.documentElement.scrollTop > 500) {
                setshowGototop(true)
            }
            else {
                setshowGototop(false)
            }
        }
        window.addEventListener("scroll", totop);
        return () => {window.removeEventListener('scroll',totop)}
    })
    return <Context.Provider value={{showGototop,setshowGototop}} >
        {children}
    </Context.Provider>;
}

export default Provider;