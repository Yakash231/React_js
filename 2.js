let a1="2"
let a2="2"
console.log(typeof (String(a1)+String(a2)))
if(typeof(a1) == typeof(a2))
{
    console.log("Both are of same type");
}
else{
    console.log("Both are of different type");
}
let score =44
if(typeof(score) === 'number')
{
    console.log("Score is a number");
}
else{
    console.log("Score is not a number");
}
let arr = [1, 2, 3, 4, 5];
if(typeof(arr) === 'object')
{
    console.log("Array is an object");
}