const loadCountries = ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries = (countries)=>{
    const countriesContainer = document.getElementById("all-countries");
        // console.log(countries);
        // for(const country of countries) {
        //     console.log(country);
        // }
        countries.forEach(country=> {
            console.log(country);
            const countryDiv= document.createElement("div");
            countryDiv.classList.add('country')
        })
}
loadCountries();