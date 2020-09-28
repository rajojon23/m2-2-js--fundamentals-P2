// Exercise 15
//
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filterNonUnique(arr) {
  // arr is an array of values of any type

  	let new_array = []; 
	arr.forEach(function(number){
    	
		 let counts = arr.filter(function(value){
	    	return value === number;/*number is the number inside the original array*/
		}).length;/*how many times is that number occuring in the array*/


		 if(counts < 2){ /*only push those with one counts into the new array*/
			new_array.push(number);
		 }



	});







	return new_array;


}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;
