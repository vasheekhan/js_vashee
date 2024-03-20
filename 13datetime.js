let myDate = new Date()
console.log(myDate.toString()) //same + standardtime
console.log(myDate.toDateString()) //wed mar 20 2024
console.log(myDate.toLocaleString())// 20/3/2024+time
console.log(typeof myDate)
let mycreateddate = new Date(2023, 0, 23) //ye btayega 2023 me jan me 23 date ko konsa din tha
console.log(mycreateddate.toDateString())
let mytimestamp=(Math.floor(Date.now()/1000)) //current date
console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(mytimestamp)
