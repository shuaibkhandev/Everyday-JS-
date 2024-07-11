function vowels(para) {
    const vowels = 'aeiouAEIOU'
    let count = 0;
    for(let i=0; i<para.length; i++){
        if(vowels.indexOf(para[i]) !== -1){
            count ++;
        }
    }
    console.log(count);
}

vowels("Hello Now I am Checking total vowels number in my para")