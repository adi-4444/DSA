function calculator(){
let firstline = readline(" ");
let [num1, operator, num2] = firstline.split(" ");
if (operator === "+") {
	console.log(parseInt(num1)+parseInt(num2));
}
if (operator === "-") {
	console.log(parseInt(num1)-parseInt(num2));
}
if (operator === "*") {
	console.log(parseInt(num1)*parseInt(num2));
}
if (operator === "/") {
	console.log(parseInt(num1)/parseInt(num2));
}
}