//1 //
for (let i = 0, i <= 999, i++){
    console.log(i);
}
//2//
for (let j = 999, j >=999, i--){
    console.log(j);
}
//3//
var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
directors.forEach(function(something) {
    console.log(something);
}, this);
//4//
const name = ["Michelangelo Antonioni" , "David Lynch"];
name.forEach(function(printname) {
    console.log("Hi, " + printname)
}, this);
//6//
var twoLengths = ["Hank", "Longer Than Hank"]
function(lengthofthenames) {
    console.log(twoLengths.length);

}
//8

for(let i = 0, i< 10, i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log("FizzBuzz");
    }
    else if()
}