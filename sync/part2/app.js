newCard = document.querySelector('#btnNewCard')

let deck_id = 0;

function init(){
    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => {
        deck_id = res.data.deck_id
        console.log(res.data)
        console.log("DECK ID IS " + deck_id)
        id_element = document.createElement('p')
        id_element.innerText = "DECK ID: " + deck_id
        document.body.appendChild(id_element)
    })
    .catch(err => {
        console.log(err)
    })
}

function getNewCard() {
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then(res => {
        console.log(res.data)
        console.log("Suit: " + res.data.cards[0].suit)
        console.log("Value: " + res.data.cards[0].value)
    })
    .catch(err => {
        console.log(err)
    })
  }


newCard.addEventListener('click', getNewCard)
document.addEventListener('DOMContentLoaded', init)