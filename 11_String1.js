const name="vashee"
const repo=200
console.log(name+repo+"value")
//above is not a good practise

console.log(`hello my name is ${name} and my repo count is ${repo}`)
//this is a good practise but this include `` $ {}

const gamename= new String("vashee khan")
console.log(gamename[0])
console.log(gamename.__proto__) //object
console.log(gamename.length)


console.log(gamename.toUpperCase()) //omp use function brackets 

console.log(gamename.charAt(2))

console.log(gamename.substr(1,4))
console.log(gamename.trim())
console.log(gamename.indexOf('k'))
console.log(gamename.slice(3,7)) //3 se chalu karega  //does not include last index

console.log(gamename.slice(-8,4)) //negative value se chalu hosakta hai but sub str nhi chaku hota negative number se
console.log(gamename.replace('v','s'))
console.log(gamename.includes("shee kha"))
console.log(gamename.concat(" ashish ka dost"))

console.log(gamename.split(" "))