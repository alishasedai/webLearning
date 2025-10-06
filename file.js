function alternateCase(str) {
 let res = [];

for(let i = 0; i<str.length; i+=2){
    res.push(arr[i]);
}
return res;
}

let arr = [1,2,3,4,5,6,7]

let results = alternateCase(arr);
console.log(results.join(" "));


