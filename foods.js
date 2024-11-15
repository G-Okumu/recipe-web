const foodContainer = document.getElementById("foodContainer");

async function fetch_recipes() {

    await fetch("https://api.api-ninjas.com/v1/recipe?query=meat", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'your_api_key',
        }
    }).then(resp => resp.json())
        .then((data) => renderFoods(data))

}




function renderFoods(data) {

    foodContainer.innerHTML = data
        .map(
            (item) => `
        <div class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
          <img class="w-64 mx-auto rounded transform transition duration-300 hover:scale-105" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6eLTsrqkurGqD28zjV3f30ilJOiuiTaTHw&s" alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">${item.title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">${item.servings}</p>
            <button 
                class="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" 
                data-instructions="${item.instructions}" 
                data-ingredients="${item.ingredients}" 
                data-title="${item.title}" 
                onclick="handleDetails(this)">
                View More
            </button>
          </div>
        </div>`
        )
        .join("");
}

function handleDetails(button) {
    const instructions = button.getAttribute("data-instructions");
    const ingredients = button.getAttribute("data-ingredients");
    const title = button.getAttribute("data-title");

    let data = [{'instructions': instructions}, {'ingredients': ingredients}, {'title': title}];

    localStorage.setItem("data", JSON.stringify(data));

    // Redirect to recipe-detail.html
    window.location.href = "./recipe-detail.html";
}



fetch_recipes();
