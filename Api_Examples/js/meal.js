const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    // console.log(meals);
    //step->.1.Get the Container Element
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        // step-02:Create Child for each element
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        //steap-03.Set content of the child
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

             <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Launch demo modal
            </button>
           </div>
       </div>
        `;
        // step-04: appendChild
        mealsContainer.appendChild(mealDiv);
    });
}

const searchMeal = () => {
    // console.log("Btn clicked");
    const searchText = document.getElementById("search-field").value;
    // search meals
    console.log(searchText);
    loadMeal(searchText);

}
loadMeal('ric');