// ES6 fat arrow function

// function number() {
//     return 10;
// }

 let num=()=> {
    return 10;
}
// let num=()=>return 5; wrong 5 normally return
// console.log(number());

console.log(num());

var javascript = {
    name:'javascript',
    libraries:['React','Angular',"vue"],
    printLibraries: function(){
        console.log(this)
        this.libraries.forEach(function(a){
            console.log(`${this.name} Loves ${a}`);
        })
    }
}
javascript.printLibraries();