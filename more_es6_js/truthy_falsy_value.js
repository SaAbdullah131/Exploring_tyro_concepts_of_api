// truthy falsy

/* truthy values
    1.true
    2.string except empty is true
    3.empty array and content array 

*/
/*falsy values
1.false
2.empty string
3.null
4.explicit 0 
5.undefined
6.NaN

*/
var myVar =[12,343];

if(myVar) {
    console.log("I'm truthy");
} else {
    console.log("I'm falsy");
}