const loadUser = ()=> {
    fetch("https://randomuser.me/api/?gender=female")
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
const displayUser = (users)=>{
    const nameTag = document.getElementById("name");
    nameTag.innerText =users.results[0].name.title + ' ' + users.results[0].name.first + ' ' + users.results[0].name.last;
    const genderTag = document.getElementById("gender");
    genderTag.innerText = users.results[0].gender;
    const location= document.getElementById("location");
    const img= document.getElementById("image");
    img.src= users.results[0].picture.large;
    location.innerText = users.results[0].location.street.number;
    console.log(nameTag);
    console.log(genderTag);
    console.log(location);
    console.log(img);
}

loadUser();