

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"Friedrice"})
        }else{
            reject({failed:"Sorry, We could'nt do it."})
        }
    })
}

ricePromise().then((fr)=>{
console.log(fr)
}).catch((f)=>{
    console.log(f)
});