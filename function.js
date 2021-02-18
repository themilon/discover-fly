function ticketInput(ticketClass, isIncrease) {
	const inputValue = document.getElementById(ticketClass + "-input");
	const inputNumber = parseInt(inputValue.value);
	let totalTicket = inputNumber;
	if (isIncrease == true) {
		totalTicket++;
	}
	if (isIncrease == false && inputNumber > 0) {
		totalTicket--;
	}
	inputValue.value = totalTicket;
	let totalTicketPrice = 0;
	if (ticketClass == "firstClass") {
		totalTicketPrice = totalTicket * 150;
	}
	if (ticketClass == "economy") {
		totalTicketPrice = totalTicket * 100;
	}

	document.getElementById(
		ticketClass + "-Price"
	).innerText = totalTicketPrice;
	totalCharge();
}

function totalCharge() {
	const firstClass = totalChargeInputValue("firstClass");
	const economyClass = totalChargeInputValue("economy");
	const total = firstClass * 150 + economyClass * 100;

	document.getElementById("sub-total").innerHTML = total;
	const tax = total * 0.1;
	document.getElementById("tax-amount").innerHTML = tax;

	const amount = total + tax;
	document.getElementById("amount").innerHTML = amount;
}
function totalChargeInputValue(ticketClass) {
	const chargeInput = document.getElementById(ticketClass + "-input");
	const chargeInputValue = parseInt(chargeInput.value);
	return chargeInputValue;
}
