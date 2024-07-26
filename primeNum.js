// We will find here prime number using function
// The prime number is which divide by one and itself just 
// One is not a prime number
// Two is a prime number


const IsprimeNum = (num) => {
    if (num == 1){
        return 'Not a Prime Number..'
    }

    if (num == 2){
        return "Prime Number.."
    }
for(let i = 2; i<num; i++){
    if(num % i === 0){
        return "Not a Prime Number.."
    }
    
        return "Prime Number.."
    
}
}

const result = IsprimeNum(4)
console.log(result);