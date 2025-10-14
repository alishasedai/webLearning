// let num = 2;     CHECKING EVEN OR ODD
// if(num % 2== 0){
//     console.log("Even")

// }else{
//     console.log("odd")
// }

// let x = 7, y= 6, z =10 FINDING THE MAXIMUM NUMBER

// console.log(Math.max(x,y,z))

// let str = "Alisha"   REVERSING THE STRING
// console.log(str.split().reverse().join())

//  CHECKING THE GIVEN STRING IS PALINDROME OR NOT
// let str = "madam";
// let isPalindrome = str === str.split("").reverse().join("");
// console.log(isPalindrome);

//  TABLE OF 5
// let num = 5;
// for(let i=1 ; i<=10 ; i++){
//     console.log( `${num} X ${i} = ${num * i}` )
// }

//FINDING THE LARGEST NUMBER IN AN ARRAY

// let nums = [1, 22,3,4]
// console.log(Math.max(...nums))

//REMOVING THE DUPLICATE NUMBRS FROM ARRAY
// let dup = [1,2,3,4,1,1,3,4,5,6,7,6,5,3,4,2]
// let remove = [...new Set(dup)]
// console.log(remove)

//FINDING THE FIBONACCI SERIES
// let n1 = 0 , n2 =1;
// console.log(n1)
// console.log(n2)
// for(let i =2 ; i<30 ;i++){
//     let next = n1 + n2;
//     console.log(next)
//     n1 = n2;
//     n2 = next;
//
const numbers = [1, 2, 3, 4, 10];
// numbers.forEach((element ,i) => {
//     console.log(i + " : " +element);
// }) 
// const newArr = numbers.map((updated))

// function updated(n){
//     return n *2
// }
// const newArr1 = numbers.map((n) => n * 5
// )
// console.log(newArr1);
// const users = [
//     {firstName : "Alisha", age : 20},
//     {firstName : "Aman", age : 22},
//     {firstName : "Ankita", age : 21},
// ]
// const userNames = users.map((user) =>  user.firstName ===  "Alisha" ? "Alisaaa" : user.firstName) 
// console.log(userNames);

// const fi = numbers.filter((n) => n !== 2)

// console.log(fi);
// let total = numbers.reduce((acc, current) => {
//     console.log(`acc : ${acc} , current : ${current}`);
//     return acc + current
// },1)
// console.log(total);
// let max = numbers.reduce((acc, current) =>{
//     return current > acc ? current : acc
// })
// console.log(max);

// setTimeout(() =>{
//     console.log("hello")
// },6000)

// setInterval(() =>{
//     console.log("hi")
// },3000)

let s = [87,91,88,99,93,95,67]
let greater = s.filter((val) =>{
    return val > 90
})
console.log(greater);
let arr = [1,2,3,4,5,6,7,8,9,10]
let sum = arr.reduce((prev, curr) => {
    return prev + curr
})
console.log(sum);
let mul = arr.reduce((prev, curr) =>{
    return prev * curr
})
console.log(mul);

