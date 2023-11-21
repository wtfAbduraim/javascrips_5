var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elInput2 = document.querySelector(".input_2");
var elInput3 = document.querySelector(".input_3");
var elText = document.querySelector(".text");
var elText2 = document.querySelector(".text_2");
var elText3 = document.querySelector(".text_3");

var input = elInput.value.trim()
var input_2 = elInput2.value.trim()
var input_3 = elInput3.value.trim()

elForm.addEventListener("submit", (evt)=> {
    evt.preventDefault()
    elText.textContent = "Ismim" +   '  ' + elInput.value;
    elText2.textContent = "Familyam" + '   ' + elInput2.value;
    elText3.textContent = "Otchestvam" + '  ' + elInput3.value;
})