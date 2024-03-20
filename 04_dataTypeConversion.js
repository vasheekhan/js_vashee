let score="33abc"
console.log(typeof score)
console.log(typeof(score))//another declaration
let valueInNumber = Number(score) //type conversion
console.log(typeof valueInNumber)
console.log(valueInNumber) //not a number


let score1=null
let valueInNumber2 = Number(score1) //type casting
console.log(typeof valueInNumber2) //number
console.log(valueInNumber2) //0



let score2=undefined
let valueInNumber3 = Number(score2) //type casting
console.log(typeof valueInNumber3) //number
console.log(valueInNumber3) //NaN

let isLoggedIn=1
let booleanIsLoggedin=Boolean(isLoggedIn)
console.log(booleanIsLoggedin);
//1=>true 0=>False ""=>False "vashee"=true



let someNumber =33
let stringnmber= String(someNumber)
console.log(stringnmber)
console.log(typeof stringnmber)



//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0
//Null=>0
//undefined=>Nan


