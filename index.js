var btnclass=document.querySelectorAll("div")[0];
document.querySelector("button").addEventListener("click",rain);
function rain(){
btnclass.classList.add("container");
document.querySelector("button").remove();
var audio=new Audio("rainy.mp3")
audio.play();
}
