function reverse_number(num){
     num = num + ''

   return num.split("").reverse().join("")
}


const ans = reverse_number(1234554321);
console.log(ans);