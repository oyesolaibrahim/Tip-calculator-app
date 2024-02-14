
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");
	
	function tipAmount5() {
		
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = 0.05 * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2)); 


if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}

	function tipAmount10() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = 0.1 * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2)); 


if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}



	function tipAmount15() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = 0.15 * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2)); 


if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}


	function tipAmount25() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = 0.25 * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2));



if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}


	function tipAmount50() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = 0.5 * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2)); 


if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}



	function custom() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput").value;
let noOfPeopleInput = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput").value;
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let custom = document.querySelector(".custom-input").value;
let cantBeZero = document.querySelector(".cant-be-zero");

let division = billInputValue / noOfPeopleInputValue;
let tipAmount = (custom / 100) * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2)); 


if (noOfPeopleInputValue <= 0) {
	//cantBeZero.i = "Can't be zero";
	cantBeZero.style.display = "inline-block";
	noOfPeopleInput.style.border = "1px solid red";
	let division = 0;
	let tipAmount = (0.05) * division;
	let totalAmount = tipAmount + division;
	console.log(tipAmount.toFixed(2));

	tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
	totalResult.innerHTML = "$" + (totalAmount.toFixed(2));
}else {
	cantBeZero.style.display = "none";
	noOfPeopleInput.style.border = "none";
}
}


function resetBtn() {
let noOfPeopleInputValue = document.querySelector(".noOfPeopleInput");
let billInputValue = document.querySelector(".billInput");
let tipResult = document.querySelector(".tipResult");
let totalResult = document.querySelector(".totalResult");
let custom = document.querySelector(".custom-input").value;
let resetBtn = document.querySelector(".resetBtn");


let division = 0;
let tipAmount = (custom / 100) * division;
let totalAmount = tipAmount + division;
console.log(tipAmount.toFixed(2));

tipResult.innerHTML = "$" + (tipAmount.toFixed(2));
totalResult.innerHTML = "$" + (totalAmount.toFixed(2));

billInputValue.placeholder = 0;
noOfPeopleInputValue.placeholder = 0;
}