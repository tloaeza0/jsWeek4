//EASY

let array = [1, 4, 7];
let array2 = [10, 5];
let array3 = [1.5, 3, 2.5, 1];

const averageFunc = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(averageFunc(array));



//MEDIUM
let num = [4, 5, 6, 7, 0, 1, 2];

function checkIndex(arr, x) {
   return arr.indexOf(x);
     
}

console.log(checkIndex(num,6));



//HARD

 
  
  






//VERY HARD
//
//make a function and then an for loop that would loop through the array to look for the total amount of that array
// with the total amount you could then create multiple variables that would compare two inputs and try to find the total amount using less than operators


 