/* Function that calculate how many 
clunks will be displayed depending 
on times value*/
function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}
/*Functionis checking given conitions 
depend on size value and if value is 
more than 1 it will use another function
clunk(times) */

function thingamajig(size) {
	var facky = 0;
	clunkCounter = 0;
	if (size == 0) {
		display("clank");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
// Function is a loop counter
function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}
//Global variables and call a 2 functions: thingamajig, clunkCounter
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);