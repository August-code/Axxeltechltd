//Get the contactModal
var modal = 
document.getElementById('contactModal')

//Get the button that opens the modal
var btn = 
document.getElementById('contact')

//when the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block"
}

//Get the span element that closes the modal
var span = 
document.getElementsByClassName('close') [0];

//when the user clicks on <span> x, close the modal
span.onclick = function() {
    modal.style.display = "none";
}
