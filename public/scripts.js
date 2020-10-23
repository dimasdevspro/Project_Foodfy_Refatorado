//loop para encontrar id em data.js

const cards = document.querySelectorAll('.card_link');

for (let i=0; i < cards.length; i++) {
    const revenue = cards[i]
    revenue.addEventListener('click', () => {
        window.location.href = `/revenues/${i}`
    })
}


//condição para "esconder" ou "mostrar"

const showOrHideIngredients = document.querySelector('.showorhide-revenue')
const ingredients = document.querySelector('.ingredients');

document.querySelector(".showorhide-revenue").addEventListener("click", function (){
    if(showOrHideIngredients == "Esconder") {
        ingredients.classList.add("hidden")
    } else (
        ingredients.classList.remove("hidden")
    )
    

})