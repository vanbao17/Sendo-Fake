import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../../Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Context } from "../../../store/Context";
function BtnChat() {
    const {showGototop,setshowGototop} = useContext(Context)
    return (  
        <Buttons  chat hide >
            <span style={{display:"flex",alignItems:"center",gap:"5px"}}><FontAwesomeIcon icon={faMessage} flip="horizontal" />Chat</span>
        </Buttons>
    );
}

export default BtnChat;