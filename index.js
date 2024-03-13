const cards = document.querySelectorAll("#cards .card")
const contents = document.querySelectorAll("#contents .content")

const clickCard = (id) => {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].dataset.number === id) {
            cards[i].classList.add("active")
            contents[i].classList.remove("hidden")
        } else {
            cards[i].classList.remove("active")
            contents[i].classList.add("hidden")
        }
    }
}

for (const card of cards) {
    card.addEventListener('click', () => {
        clickCard(card.dataset.number)
    })
}