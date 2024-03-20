//primitives 7 types
//Number Boolean Symbol,String,null,undefined ,BigInt

//Dynamically types language is javascript
//Refrence (non premitive)






//dono ki value same nhi hogi using Symbol
const id =Symbol("123")
const anotherid=Symbol("123")
console.log(id===anotherid)


const bigNumber=565346565466574777899n

//Array,Object,Function
const heroes=["shaktiman","nagraj","doga"] //arrays use square brackets
let myobj={
    name:"vashee",    //use curly braces colon comma 
    age: 22,

}
const myFunction=function(){
    console.log("hello world")
}
console.log(typeof bigNumber)