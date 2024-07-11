function uppercase(para){
    // console.log(para.split(" ")[0].charAt(0).toUpperCase() + para.split(" ")[0].slice(1));
    const arr = para.split(" ");
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    console.log(arr);
    console.log(newArr);
}

uppercase("hey its me shuaib khan");