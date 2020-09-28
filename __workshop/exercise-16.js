// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
	let new_array = [];
	for (let i = num1; i <= num2; i++) {
		let num_str = i.toString();
		let num_total = 0;
		for (let j = 0; j < num_str.length; j++) {
			let num_compare = parseInt(num_str);
			let num_num = parseInt(num_str[j]);

			num_total = num_total + Math.pow(num_num, 3);
				

			if(num_total == num_compare){
				/*make sure unique numbers only are pushed*/
				if(new_array.indexOf(num_compare) === -1) {
				   new_array.push(num_compare);
				}
				
			}
		}



	}
  	
  	return new_array;

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
