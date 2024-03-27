const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroe=["superman","flash","batman"]
marvel_heroes.push(dc_heroe)
console.log(marvel_heroes)
const all_heroes=marvel_heroes.concat(dc_heroe)
console.log(all_heroes) //return a new array
const all_new_heroes=[...marvel_heroes,...dc_heroe] // this is  best method because in this we can concat more than one array
console.log(all_new_heroes)
const another=[1,2,3,[4,5,[7,8],[9,10]]]
console.log(another.flat(Infinity))
console.log(Array.isArray("vashee","vasheee"))
console.log(Array.from("vashee"))
console.log(Array.from({name: "vashee"}))//give empty object but it is an interesting case very imp for interview
console.log(Array.of(100,200,300))
