//arrays
const myarr = [0, 1, 2, 3, 4] //objects different type cof data can be stored 
//size is not fixed 
console.log(myarr[0])
//array is (shallow copy) mean if you store same type of data it will point at refrence point
//[deep copy] properties do not share the same refrence
const myheros=["shaktiman","batman","aashish"]
const myarr3= new Array(1,3,2,4,5)
console.log(myarr3)



//array method 

myarr.push(7)
myarr.push(6)
myarr.pop() //piche se pop hota hai
console.log(myarr)
myarr.unshift(9)
console.log(myarr)
myarr.shift() //first element delete hojata
console.log(myarr)
console.log(myarr.includes(9))
console.log(myarr.indexOf(8))
console.log(myarr)

const newarr=myarr.join()
console.log(myarr)
console.log(typeof newarr)//string due to join
//slice splice

console.log("a",myarr)
const myn1=myarr.slice(1,3) 
//new array return karta hai without original array me change kiye
console.log(myn1)
console.log("b",myarr)

const myn2=myarr.splice(1,3) //new array return karta hai but original array me change hota hai
console.log(myn2);
console.log("a",myarr)