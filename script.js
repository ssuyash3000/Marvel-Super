
import MD5 from "./crypto-js/md5"; 

console.log("Working");


let date = new Date();

let inputBar = document.getElementById("inputBar");



function searchInput(text){

    if(text.length != 0){
        console.log(CryptoJS.MD5("text to hash").toString());

    }

}


function handleInput(input){
    let text = input.value;
   
    searchInput(text);
}

function handleKey(e){

    if(e.target.id === "inputBar"){
        handleInput(e.target);
    }


}


document.addEventListener("keyup", handleKey);
