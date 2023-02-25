
function photoAll() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res =>res.json())
    .then(data =>displayImage(data))
}
function displayImage(images){
    const imageContainer = document.getElementById("photo-container");
    for(const image of images) {
        console.log(image);
        const imgDiv=document.createElement("div");
        imgDiv.innerHTML= `
            <h4>id-${image.id}</h4>
        `;
    }
     imageContainer.appendChild(imgDiv);
}

photoAll();