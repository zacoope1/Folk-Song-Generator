var debugMode = "OFF"; // <------- DEBUG MODE TOGGLE

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

//gets variables from user interface
function getData(){

    songSpeed = document.forms["songSetupForm"]["songSpeedSelect"].value;
    songLength = document.forms["songSetupForm"]["songLengthSelect"].value;
    debugMode = document.forms["songSetupForm"]["debugModeSelect"].value

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
        case 8:
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

function setChordImage(chord){

    var string = "/src/img/" + chord + ".png";
    document.getElementById("Chord_Image").src = string;

}

async function playSound(chord){

    var string = "/src/snd/" + chord + ".mp3";
    var sound = new Audio(string);
    sound.play();

}

async function main(){

    document.getElementById("language").innerHTML = "";
    document.getElementById("input").innerHTML = "";

    getData();

    generateLanguage();

    setSleepTime();

    document.getElementById("language").innerHTML = languageToString();

    document.getElementById("input").innerHTML = inputToString();

    document.getElementById("DFA_View").scrollIntoView();

    //PLAY SONG
    for(var i = 0; i < songLanguage.length; i++){

        playSound(songLanguage[i]);
        setDFAImage(songLanguage[i]);
        //setChordImage(songLanguage[i]);
        await sleep(sleepTime);
        console.log(i);

    }

    printDebug();
    
    setDFAImage("");
    inputLanguage = []; // Clear input language array on finish
    songLanguage = []; // Clear song language array on finish
    return;
}
