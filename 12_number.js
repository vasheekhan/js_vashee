//number and maths in this file

const score= 4000
console.log(score)

//if you want to knowthe value and datatype ofthe object then you have to make object first then pass the value in it if you print then it will show type +value
const balance=new Number(100) //pass the vlaue inside the round bracket
console.log(balance)

console.log( balance.toString().length)
console.log(typeof balance)
console.log(balance.toFixed(2))//decimal ke baad kitna point chaiyye

const anothenumber =23.53443
console.log(anothenumber.toPrecision(2)) //kitne digit tak ki precise value chaiyye

const hundreds=10000
console.log(hundreds.toLocaleString('en-IN')) //comma lagadeta hai


//maths 

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.5));
console.log(Math.min(2,3,4,5,6));
console.log(Math.floor(Math.random()*10)+1) //0 and 1 ke bich me range atti hai
//jitne se multiply karoge uske bich me wo number degaa
//+1 isliye kiya taki 0.1 value naa aaye har baar +1 karna hoga

//range set karne ke liye maths class ki
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))