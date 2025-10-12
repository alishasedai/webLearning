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
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((element ,i) => {
    console.log(i + " : " +element);
}) 
