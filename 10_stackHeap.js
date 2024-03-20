//stack primitve heap non premitive

let myName="vashee"
let anothername=myName //it uses stack memory so if you update an value it will only update to the currrent variable
anothername="khan"
console.log(myName)
console.log(anothername)

//all the value in boject stored in heap memory and they point two only one for the same value so if you update the value then it will change at both the places
let userOne={
    email: "vasheekhan",   
    upi: "boka",
}
let userTwo=userOne
userTwo.email="vashee"
console.log(userOne.email)
console.log(userTwo.email)