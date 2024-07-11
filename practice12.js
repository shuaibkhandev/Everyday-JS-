function reverse_number(num){
     num = num + ''

   return num.split("").reverse().join("")
}


const ans = reverse_number(12345);
console.log(ans);