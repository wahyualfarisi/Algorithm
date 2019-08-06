/**
 * chek number if num 1 === num 2 output is string '-1' 
 * if num 1 > num 2 output is true 
 * if num 1 > num 2 output is false  
 */

 function checkNum(num1, num2){

    return (num1 === num2) ? '-1' : (num1 > num2 ) ? true : false
 }

 console.log(checkNum(1, 9))