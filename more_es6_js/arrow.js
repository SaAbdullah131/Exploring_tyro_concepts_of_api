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
        // console.log(this)
        // var self =this; before arrow function
        // this.libraries.forEach(function(a){
        //     // console.log(this);
        //     console.log(`${self.name} Loves ${a}`);
        // }) convert this function to arrow
        this.libraries.forEach((a)=>console.log(`${this.name} loves ${a}`));
    }
}
javascript.printLibraries();