


// Convert KPH to MPH 
const to_mph = (kph) => {
let mph = kph * 0.621371;
return mph.toFixed(2) + " mph";
}

console.log(to_mph(161.3));


// Convert MPH to KPH 
const to_KPH = (mph) => {
    let kph = mph * 1.60934;
    return kph.toFixed(2) + " kph";
}

console.log(to_KPH(100.23));
