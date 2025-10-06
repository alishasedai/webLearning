let arr = [1,2,3,4,5];
let findArr = 11;
let flage = false;
for(let i = 0 ; i<arr.length ; i++){
 if(arr[i] === findArr){
    console.log("Found at index "+i );
    flage = true;
    break;
 }

}
if(!flage){
    console.log("Not Found");
}