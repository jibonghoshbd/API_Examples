const searchFood = () => {
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;
    // console.log(searchText);
    searchFiled.value = '';
    if (searchText == 0) {
        // pleace write somethong
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayFood(data.meals))
    }
}

const displayFood = (meals) => {
    const displayFoodDetails = document.getElementById('display-food');
    displayFoodDetails.textContent = '';
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add = 'col';
        div.innerHTML = `
        <div onclick="loadMealDeatail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            `

        displayFoodDetails.appendChild(div);
    })


}

const loadMealDeatail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = (mealId) => {
    // console.log(mealId)
    const mealDetail = document.getElementById('display-meal-detail');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${mealId.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mealId.strMeal}</h5>
                <p class="card-text">${mealId.strInstructions.slice(0, 150)}</p>
                <a href="${mealId.strYoutube}" class="btn btn-primary">Go Youtube</a>
            </div>
    
    `
    mealDetail.appendChild(div);

}