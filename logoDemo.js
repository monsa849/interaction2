var clock = document.getElementById("clock");
 
//get date and push it to clock
function getDate() {
var d = new Date();
var t = d.toLocaleTimeString();
clock.innerHTML = t;
    }
 
getDate();
 
setInterval(function(){
  getDate()
},1000);
 
//change the font family of clock
function fontFunction(){
    var font = document.getElementById("myFonts").value;
    clock.style.fontFamily = font;
}
 
 
//bold
function boldFunction(){
    var checkBox = document.getElementById("boldCheck");
     
    if (  checkBox.checked == true  ) {
        clock.style.fontWeight = 'bold';
    }
     
    else {
        clock.style.fontWeight = 'inherit';
    }
}
 
 
//italic
function italicFunction(){
    var checkBox = document.getElementById("italicCheck");
     
    if (  checkBox.checked == true  ) {
        clock.style.fontStyle = 'italic';
    }
     
    else {
        clock.style.fontStyle = 'inherit';
    }
}
 
 
//size 
 
function sizeFunction(){
    var checkSize = document.getElementById("size").value;
    clock.style.fontSize = checkSize + "px";
     
     
}