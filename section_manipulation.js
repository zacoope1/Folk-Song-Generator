var buttonColorActive   = "#37A988"; //SET SECONDARY BUTTON BACKGROUND COLOR
var buttonColorInActive = "#679AA5"; //SET PRIMARY BUTTON BACKGROUND COLOR

function setActiveButton(x){

    if(x == 0){
        document.getElementById("Random_Active").style.backgroundColor = buttonColorActive;
    }
    else if(x == 1){
        document.getElementById("Input_Active").style.backgroundColor = buttonColorActive;
    }
    else if(x == 2){
        document.getElementById("Popular_Active").style.backgroundColor = buttonColorActive;
    }

}

function closeSongPanes(){

    document.getElementById("Song_Setup").style.display = "none";
    document.getElementById("User_Song_Input").style.display = "none";
    document.getElementById("Pre-Made_Songs").style.display = "none";

}

function resetButtonColors(){
    document.getElementById("Random_Active").style.backgroundColor = buttonColorInActive;
    document.getElementById("Input_Active").style.backgroundColor = buttonColorInActive;
    document.getElementById("Popular_Active").style.backgroundColor = buttonColorInActive;
}

function raiseRandomMenu(){
    resetButtonColors();
    closeSongPanes();
    setActiveButton(0);
    document.getElementById("Song_Setup").style.display = "block";
}

function raiseInputMenu(){
    resetButtonColors();
    closeSongPanes();
    setActiveButton(1);
    document.getElementById("User_Song_Input").style.display = "block";

}

function raisePopularMenu(){
    resetButtonColors();
    closeSongPanes();
    setActiveButton(2);
    document.getElementById("Pre-Made_Songs").style.display = "block";

}