const foodContainer = document.getElementById("foodContainer");
const not_found = document.getElementById('not-found');

function renderFoods(data) {

    if (data.length) {
        if (not_found) document.getElementById('not-found').classList.add('hidden');

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
            .join("")

    } else {

        not_found.classList.remove('hidden');
        document.getElementById('spinner', foodContainer).classList.add('hidden');
    }
}

function handleDetails(button) {
    const instructions = button.getAttribute("data-instructions");
    const ingredients = button.getAttribute("data-ingredients");
    const title = button.getAttribute("data-title");

    let data = [{ 'instructions': instructions }, { 'ingredients': ingredients }, { 'title': title }];

    localStorage.setItem("data", JSON.stringify(data));

    // Redirect to recipe-detail.html
    window.location.href = "./recipe-detail.html";
}


async function fetch_recipes(search_term) {
    await fetch(`https://recipe-web-lyart.vercel.app/api/get-data?query=${search_term}`, {
    }).then(resp => resp.json())
        .then((data) => renderFoods(data))

}

document.getElementById("search").addEventListener("click", () => {
    let search_term = document.getElementById("search-term");

    foodContainer.innerHTML = `
            <div role="status" id="spinner" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span class="sr-only">Loading...</span>
            </div>
    `
    fetch_recipes(search_term.value.trim());
    search_term.value = "";// clear the search
})
