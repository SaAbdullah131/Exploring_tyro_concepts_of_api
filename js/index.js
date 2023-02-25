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

function deleteAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'DELETE',
    })
}

function patchAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PATCH",
    body:JSON.stringify({
        title:"foo",
    }),
    headers: {
        "Content-type":'application/json;charset=UTF-8',
    },
})
.then(res =>res.json())
.then(data => console.log(data));

}
function createAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"POST",
    body:JSON.stringify({
        title:"foo",
        body:'bar',
        userId:1,
    }),
    headers: {
        "Content-type":'application/json;charset=UTF-8',
    },
})
.then(res =>res.json())
.then(data => console.log(data));
}