function factorial(num){

    return num != 1 ? num * factorial(num - 1) : 1
    
}

const num1 = factorial(5)

console.log(num1)