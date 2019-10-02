var text = document.getElementById("text");

//change the font family of the tezt

function fontFunction(){
	var font = document.getElementById("myFonts").value;
	text.style.fontFamily = font;
}

//bold
function boldFunction(){
	var checkBox = document.getElementById("boldCheck");

	if (   checkBox.checked == true  ) {
		text.style.fontWeight= 'bold';
	}

	else {
		text.style.fontWeight= 'inherit';
	}

}

//italic
function italicFunction(){
	var checkBox = document.getElementById("italicCheck");

	if (   checkBox.checked == true  ) {
		text.style.fontStyle = 'italic';
	}

	else {
		text.style.fontStyle = 'inherit';
	}
}

function hideFunction() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    text.style.display = "none";
}
	else {
     text.style.display = "block";
 	}

}

function outlineFunction() {
var checkBox = document.getElementById("outlineCheck");
if (checkBox.checked == true){
	text.style.outline = "10px dashed blue";
}

else {
	text.style.display = "none";
	}
}
//size

function sizeFunction(){
	var checkSize = document.getElementById("size").value;
	text.style.fontSize = checkSize + "px";
}


