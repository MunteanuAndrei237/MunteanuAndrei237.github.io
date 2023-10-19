import './PopUp.css';
function hidePopUp(){
    document.getElementById("popUp").style.display="none";
}
function PopUp(uu){
    console.log(uu.message)
    return(
        <div id="popUp" onClick={hidePopUp}>
            <div id="popUpBox">
                <div id="popUpText"></div>
            </div>
        </div>
    );
}

export default PopUp;