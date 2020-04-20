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
        case 0:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 1:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 3:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 4:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 5:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 6:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 7:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;
        case 9:
            switch(input){
                case 0:
                    break;
                case 1:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 9:
                    break;
            }
            break;

    }

}

function generateLanguage(){

    switch(songLength){
        case "0":
            generateNums(50);
            for(var i = 0; i < 50; i++){
                parseDFA(inputLanguage[i]);
            }
            break;
        case "1":
            generateNums(100);
            for(var i = 0; i < 100; i++){
                parseDFA(inputLanguage[i]);
            }
            break;
        case "2":
            generateNums(200);
            for(var i = 0; i < 200; i++){
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

    getData();

    generateLanguage();

    setSleepTime();
 
    songLanguage = ["C","G","AM","C","G","C","EM","AM","F","C","G"]; //DEBUG

    //PLAY SONG
    for(var i = 0; i < songLanguage.length; i++){

        playSound(songLanguage[i]);
        setDFAImage(songLanguage[i]);
        setChordImage(songLanguage[i]);
        await sleep(sleepTime);
        console.log(i);

    }

    printDebug();
    
    setDFAImage("");
    inputLanguage = []; // Clear input language array on finish
    songLanguage = []; // Clear song language array on finish
    return;
}
