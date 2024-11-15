let data = JSON.parse(localStorage.getItem('data'));

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('title').textContent = data[2].title;

    let list = document.getElementById('recipe-list');
    let instructions = document.getElementById('instructions');


    data[1].ingredients.split('|').forEach(element => {
        let li = document.createElement('li');

        li.classList = "pl-3";
        li.textContent = element;

        list.appendChild(li);
    });

    data[0].instructions.split('.').forEach(element => {
        console.log(element);
        let li = document.createElement('li');

        li.classList = "pl-4 mt-2";

        li.textContent = element;

        instructions.appendChild(li);
    });

});

