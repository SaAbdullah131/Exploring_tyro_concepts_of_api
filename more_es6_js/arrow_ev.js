
const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");

// function show() {
//     console.log(this);
//     display.innerHTML = this.value;// value pascchi
//     var self= this;
//     setTimeout(function(){
//         thanks.innerHTML= `You have typed : ${self.value}`;
//     },1000);
// }

searchInput.addEventListener("keyup",()=>{
    console.log(this);
    display.innerHTML = this.value;
});