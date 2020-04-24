var debugMode = "OFF"; // <------- DEBUG MODE TOGGLE
var isRunning = false; // <------- Allows 1 song to run at a time
var queueCancel = false; // <----- Puts a queue to cancel a running song
var flipSizeBool = false; // <---- Variable for image size manipulation

// Algorithm Variables
var songSpeed = 0;
var songLength = 0;
var L = 0;
var H = 8; 
var inputLanguage = []; // Randomly generated INPUT language
var songLanguage = []; // OUTPUT language.
var sleepTime = 500; // In Miliseconds
var currentState = 0; //STARTS AT S


//Function that makes program sleep in sleepTime intervals
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//DEBUG function
function printDebug(){
    
    if(debugMode == "ON"){
        var returnStr = "SongSpeed: " + songSpeed + "\nSongLength: " + songLength; 
        console.log(returnStr);
        console.log(inputLanguage);
    }

}

function flipSize(){

    if(flipSizeBool){
        document.getElementById("DFA_Image").style.width = "70%";
        document.getElementById("DFA_Image").style.height = "70%";
        flipSizeBool = !flipSizeBool;
    }
    else {
        document.getElementById("DFA_Image").style.width = "50%";
        document.getElementById("DFA_Image").style.height = "50%";
        flipSizeBool = !flipSizeBool;
    }

}

//gets variables from user interface
function getData(){

    songSpeed = document.forms["songSetupForm"]["songSpeedSelect"].value;
    songLength = document.forms["songSetupForm"]["songLengthSelect"].value;

}

function inputToString(){
    var str = "";

    for(var i = 0; i < inputLanguage.length; i++){

        str += inputLanguage[i] + " ";

    }

    return str;

}

function languageToString(){
    var str = "";

    for(var i = 0; i < songLanguage.length; i++){

        str += songLanguage[i] + " ";

    }

    return str;

}

//Generates the input language based off the user provided song length
function generateNums(x){

    for(var i = 0; i < x; i++){
        
        var rand = Math.floor(Math.random() * (+(H+1) - +L) + +L);
        inputLanguage.push(rand);
    }

}

function setSleepTime(){

    switch(songSpeed){

        case "0":
            sleepTime = 1500;
            break;
        case "1":
            sleepTime = 1000;
            break;
        case "2":
            sleepTime = 500;
            break;
        default:
            alert("Something went wrong!\nReloading page...");
            location.reload();

    }

}

//Sets songLanguage by going through the dfa
// LANGUAGE 0-S 1-A 2-AM 3-C 4-D 5-DM 6-E 7-EM 8-F 9-G
function parseDFA(input){

    switch(currentState) {
        case 0: // S
            switch(input) {
                case 0:
                    currentState = 2;
                    break;
                case 1:
                    currentState = 2;
                    break;
                case 2:
                    currentState = 3;
                    break;
                case 3:
                    currentState = 3;
                    break;
                case 4:
                    currentState = 4;
                    break;
                case 5:
                    currentState = 9;
                    break;
                case 6:
                    currentState = 9;
                    break;
                case 7:
                    currentState = 7;
                    break;
                case 8:
                    currentState = 6;
                    break;
            }
            break;
        case 1: // A
            switch(input) {
                case 0:
                    currentState = 1;
                    break;
                case 1:
                    currentState = 6;
                    break;
                case 2:
                    currentState = 5;
                    break;
                case 3:
                    currentState = 4;
                    break;
                case 4:
                    currentState = 3;
                    break;
                case 5:
                    currentState = 2;
                    break;
                case 6:
                    currentState = 7;
                    break;
                case 7:
                    currentState = 9;
                    break;
                case 8:
                    currentState = 8;
                    break;
            }
            break;
        case 2: // AM
            switch(input) {
                case 0:
                    currentState = 2;
                    break;
                case 1:
                    currentState = 1;
                    break;
                case 2:
                    currentState = 4;
                    break;
                case 3:
                    currentState = 5;
                    break;
                case 4:
                    currentState = 3;
                    break;
                case 5:
                    currentState = 9;
                    break;
                case 6:
                    currentState = 8;
                    break;
                case 7:
                    currentState = 7;
                    break;
                case 8:
                    currentState = 6;
                    break;
            }
            break;
        case 3: // C
            switch(input) {
                case 0:
                    currentState = 3;
                    break;
                case 1:
                    currentState = 1;
                    break;
                case 2:
                    currentState = 5;
                    break;
                case 3:
                    currentState = 9;
                    break;
                case 4:
                    currentState = 4;
                    break;
                case 5:
                    currentState = 8;
                    break;
                case 6:
                    currentState = 7;
                    break;
                case 7:
                    currentState = 6;
                    break;
                case 8:
                    currentState = 2;
                    break;
            }
            break;
        case 4: // D
            switch(input) {
                case 0:
                    currentState = 4;
                    break;
                case 1:
                    currentState = 1;
                    break;
                case 2:
                    currentState = 1;
                    break;
                case 3:
                    currentState = 5;
                    break;
                case 4:
                    currentState = 5;
                    break;
                case 5:
                    currentState = 9;
                    break;
                case 6:
                    currentState = 9;
                    break;
                case 7:
                    currentState = 8;
                    break;
                case 8:
                    currentState = 8;
                    break;
            }
            break;
        case 5: // DM
            switch(input) {
                case 0:
                    currentState = 5;
                    break;
                case 1:
                    currentState = 2;
                    break;
                case 2:
                    currentState = 2;
                    break;
                case 3:
                    currentState = 4;
                    break;
                case 4:
                    currentState = 4;
                    break;
                case 5:
                    currentState = 9;
                    break;
                case 6:
                    currentState = 9;
                    break;
                case 7:
                    currentState = 8;
                    break;
                case 8:
                    currentState = 8;
                    break;
            }
            break;
        case 6: // E
            switch(input) {
                case 0:
                    currentState = 6;
                    break;
                case 1:
                    currentState = 2;
                    break;
                case 2:
                    currentState = 2;
                    break;
                case 3:
                    currentState = 3;
                    break;
                case 4:
                    currentState = 3;
                    break;
                case 5:
                    currentState = 9;
                    break;
                case 6:
                    currentState = 9;
                    break;
                case 7:
                    currentState = 8;
                    break;
                case 8:
                    currentState = 4;
                    break;
            }
            break;
        case 7: // EM
            switch(input) {
                case 0:
                    currentState = 7;
                    break;
                case 1:
                    currentState = 2;
                    break;
                case 2:
                    currentState = 3;
                    break;
                case 3:
                    currentState = 4;
                    break;
                case 4:
                    currentState = 8;
                    break;
                case 5:
                    currentState = 5;
                    break;
                case 6:
                    currentState = 9;
                    break;
                case 7:
                    currentState = 6;
                    break;
                case 8:
                    currentState = 1;
                    break;
            }
            break;
        case 8: // F
            switch(input) {
                case 0:
                    currentState = 8;
                    break;
                case 1:
                    currentState = 9;
                    break;
                case 2:
                    currentState = 4;
                    break;
                case 3:
                    currentState = 3;
                    break;
                case 4:
                    currentState = 3;
                    break;
                case 5:
                    currentState = 1;
                    break;
                case 6:
                    currentState = 2;
                    break;
                case 7:
                    currentState = 6;
                    break;
                case 8:
                    currentState = 7;
                    break;
            }
            break;
        case 9: // G
            switch(input) {
                case 0:
                    currentState = 9;
                    break;
                case 1:
                    currentState = 4;
                    break;
                case 2:
                    currentState = 5;
                    break;
                case 3:
                    currentState = 6;
                    break;
                case 4:
                    currentState = 7;
                    break;
                case 5:
                    currentState = 8;
                    break;
                case 6:
                    currentState = 1;
                    break;
                case 7:
                    currentState = 2;
                    break;
                case 8:
                    currentState = 3;
                    break;
            }
            break;
    }

    switch(currentState){
        case 1:
            songLanguage.push("A");
            break;
        case 2:
            songLanguage.push("AM");
            break;
        case 3:
            songLanguage.push("C");
            break;
        case 4:
            songLanguage.push("D");
            break;
        case 5:
            songLanguage.push("DM");
            break;
        case 6:
            songLanguage.push("E");
            break;
        case 7:
            songLanguage.push("EM");
            break;
        case 8:
            songLanguage.push("F");
            break
        case 9:
            songLanguage.push("G");
            break;
    }

}

function generateLanguage(){

    switch(songLength){
        case "0":
            generateNums(20);
            for(var i = 0; i < 20; i++){
                parseDFA(inputLanguage[i]);
            }
            break;
        case "1":
            generateNums(35);
            for(var i = 0; i < 35; i++){
                parseDFA(inputLanguage[i]);
            }
            break;
        case "2":
            generateNums(50);
            for(var i = 0; i < 50; i++){
                parseDFA(inputLanguage[i]);
            }
            break;
        default:
            alert("Something went wrong!\nReloading page...");
            location.reload();
    }

}

function setDFAImage(chord){

    var string = "/src/img/DFA_" + chord + ".png";
    document.getElementById("DFA_Image").src = string;

}

function setDFAImageAccept(chord){

    var string = "/src/img/DFA_" + chord + "_Accept.png";
    document.getElementById("DFA_Image").src = string;

}

async function playSound(chord){

    var string = "/src/snd/" + chord + ".mp3";
    var sound = new Audio(string);
    sound.play();

}

async function main(){

    try {
        document.getElementById("CustomizeButton").remove();
    } catch (error) {
        console.log(error);   
    }

    var customizeButton = document.createElement("button");
    customizeButton.id = "CustomizeButton";
    customizeButton.innerHTML = "Customize Song";
    customizeButton.onclick = function(){raiseInputMenu();};
    customizeButton.type = "button";
    document.getElementById("songSetupForm").append(customizeButton);

    if(!isRunning){

        isRunning = true;

        document.getElementById("Input_Output_View").style.display = "block";

        document.getElementById("Input_Output_View2").style.display = "block";

        document.getElementById("language").innerHTML = "";

        document.getElementById("language2").innerHTML = "";

        document.getElementById("input").innerHTML = "";

        getData();

        generateLanguage();

        setSleepTime();

        document.getElementById("language").innerHTML = languageToString();

        document.getElementById("language2").innerHTML = languageToString();

        document.getElementById("input").innerHTML = inputToString();

        document.getElementById("User_Song_Textarea").value = inputLanguage;

        document.getElementById("DFA_View").scrollIntoView();

        //PLAY SONG
        for(var i = 0; i < songLanguage.length; i++){

            playSound(songLanguage[i]);
            setDFAImage(songLanguage[i]);
            //setChordImage(songLanguage[i]);
            await sleep(sleepTime);

            if(queueCancel){
                queueCancel = false;
                break;
            }
        }

        printDebug();
        
        setDFAImageAccept(songLanguage[(songLanguage.length)-1]);
        inputLanguage = []; // Clear input language array on finish
        songLanguage = []; // Clear song language array on finish
        currentState = 0;
        isRunning = false;
    }
    else {
        console.log("A song is already in progress!");
    }
    return;
}

async function checkValid(x){

    if(x == "0" || x == "1" || x == "2" || x == "3" || x == "4" || x == "5" || x == "6" || x == "7" || x == "8"){
        return true;
    }
    else{
        return false;
    }

}

async function userSong(){

    if(isRunning){
        return;
    }

    isRunning = true;

    var inputString = document.getElementById("User_Song_Textarea").value;

    if(inputString.length < 1){

        alert("You must enter values!");
        isRunning = false;
        return;

    }

    if(inputString.indexOf(" ") > 0){
        alert("String cannot contain spaces");
        isRunning = false;
        return;
    }

    //Check validity of input
    for(var i = 0; i < inputString.length; i++){

        if(inputString[i] != ","){

            if(checkValid(inputString[i])){

                inputLanguage.push(inputString[i]);

            }
            else {

                alert("Input string contains an invalid input character. \n Invalid Character: " + inputToString[i]);
                return;

            }

        }

    }

    //Sets language array
    for(var i = 0; i < inputLanguage.length; i++){

        parseDFA(parseInt(inputLanguage[i]));

    }

    document.getElementById("Input_Output_View").style.display = "block";

    document.getElementById("Input_Output_View2").style.display = "block";

    document.getElementById("language").innerHTML = languageToString();

    document.getElementById("language2").innerHTML = languageToString();

    document.getElementById("input").innerHTML = inputToString();

    document.getElementById("DFA_View").scrollIntoView();

    songSpeed = document.getElementById("songSpeedSelect2").value;

    setSleepTime();

    //Executes song
    for(var i = 0; i < songLanguage.length; i++){

        playSound(songLanguage[i]);
        setDFAImage(songLanguage[i]);
        await sleep(sleepTime);

        if(queueCancel){
            queueCancel = false;
            break;
        }

    }

    printDebug();
        
    setDFAImageAccept(songLanguage[(songLanguage.length)-1]);
    inputLanguage = []; // Clear input language array on finish
    songLanguage = []; // Clear song language array on finish
    currentState = 0;
    isRunning = false;

}

async function playPreMade(x){

    if(isRunning){
        return;
    }

    isRunning = true;


    if(x == 0){

        inputLanguage = [0,0,4,0,4,0,7,0,6,0,8,0,1,0,8,0]; // HOUSE OF THE RISING SUN
        sleepTime = 800;

    }
    else if(x == 1){
        inputLanguage = [5,0,0,0,0,0,4,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,0,0,7,0,0,4,0,0,4,0,0,0,0,0,0,5,0,0,4,0,0,2,0,0,3,0,0,0,0]; // TIMES THEY ARE A CHANGIN TODO ADD MORE
        sleepTime = 350;
    }
    else if(x == 2){
        inputLanguage = [4,0,0,1,0,7,0,1,0,0,0,0,0,0,0,1,0,7,0,1,0,0,0,0,0]
        sleepTime = 450;
    }

    else if(x == 3){
        inputLanguage = [2,0,0,0,6,0,0,0,1,0,0,0,7,0,0,0];
        sleepTime = 700;

    }

    for(var i = 0; i < inputLanguage.length; i++){

        parseDFA(inputLanguage[i]);

    }

    document.getElementById("Input_Output_View3").style.display = "block";

    document.getElementById("language3").innerHTML = languageToString();

    document.getElementById("input").innerHTML = inputToString();

    document.getElementById("DFA_View").scrollIntoView();

    //Executes song
    for(var i = 0; i < songLanguage.length; i++){

        playSound(songLanguage[i]);
        setDFAImage(songLanguage[i]);
        await sleep(sleepTime);

    }
    
    setDFAImageAccept(songLanguage[(songLanguage.length)-1]);
    inputLanguage = [];
    songLanguage = [];
    isRunning = false;
    await sleep(1000);
    setDFAImage("");
}