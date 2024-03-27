const coding =["js","ruby","java","python","cpp"]
const value=coding.forEach((item)=>{
    console.log(item);
    return item;
})
// console.log(values) does not return any value for each does not return any value

const mynum=[1,2,3,4,5,6,7,,8,9,10]
const newnum=mynum.filter((num) => num>4 )    
 //bracket ko call back bolte hai () filter return value
console.log(newnum)
//filter me phele call back function banana parega iteration ke liye uske baad deni paregi condition

const newnums=mynum.filter((num)=>{
   return num>4 
    //does not return any thing because scope starts so use return keyword
})

const new_nums=[]
mynum.forEach( (num) => {
    if(num > 4){
        new_nums.push(num)
    }
})
console.log(newnums)

//***************************************** */
const news=[] //
mynum.forEach((num)=>{
if(num>4){
    news.push(num)
}
})
console.log(news) 


//maps

const  numrer=[1,2,3,4,5,6,7]
const newN=numrer.map((num)=>{return  num+10})
console.log(newN)
//.map(()=>).map(()=>).filter(()=>) this is called chaining


//reduce

const nn=[1,2,3]
const mytotal=nn.reduce(function(accumalator,currentval){
    console.log(`acc: ${accumalator} currvalue:${currentval}`)
    return accumalator+currentval
},0)//0 is the initial value of accumalator
console.log(mytotal)

//reduce with arrow function
const total=nn.reduce((acc,curr)=>acc+curr,0)
console.log(total)






