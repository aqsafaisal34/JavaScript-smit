let arr = [1,2,3,4,5];
// let copy = arr;

// console.log(arr);
// console.log(copy);

// arr.push("6")
// console.log(arr);
// console.log(copy);


// 1st method of cloning an Array
// let newArr = arr.map((eachValue, index)=>{
//     return eachValue * 2
// })
// console.log(arr)
// console.log(newArr);

// 2nd method of cloning an Array
let newArr = ([...arr])

console.log(arr);
console.log(newArr);

newArr.push("6")
console.log(arr);
console.log(newArr);





