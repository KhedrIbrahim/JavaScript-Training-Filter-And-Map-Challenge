let mix = "A13BS2ZX";

let numOnly = mix.split("").filter(function (ele) {
    // return parseInt(ele);
    return !isNaN(parseInt(ele));      // [1, 3, 2]
}).map(function (ele){
    return ele * ele;
}).join("")
console.log(numOnly)  // 194