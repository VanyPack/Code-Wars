
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    // if  number > 0 then +- else += 0 
    let sum = 0;
    let negatives = [];

    for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sum += arr[i]
        } else {
           negatives.push(arr[i])
        }
    }  
    return sum
}

let sumResults = positiveSum([1, -1, 4])
console.log(sumResults)



// function SummPositive( numbers ) {
//     var negatives = [];
//     var sum = 0;
  
//     for(var i = 0; i < numbers.length; i++) {
//       if(numbers[i] < 0) {
//         negatives.push(numbers[i]);
//       }else{
//         sum += numbers[i];
//       }
//     }
  
//     console.log(negatives);
  
//     return sum;
//   }
  
//   var sum_result = SummPositive( [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ] );
  
//   console.log(sum_result);