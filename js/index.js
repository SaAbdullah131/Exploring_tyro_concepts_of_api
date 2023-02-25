function loadUsers2() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

const displayUsers2=data=>{
    const ul = document.getElementById("users-list");
    for(const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
};

function userEmail() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>userEmailLoad(data))
}

const userEmailLoad = data => {
     const ol = document.getElementById("user-email");
     for(const user of data){
        console.log(user.email);
        const li = document.createElement("li");
        li.innerText = user.email;
        ol.appendChild(li);
     }
}