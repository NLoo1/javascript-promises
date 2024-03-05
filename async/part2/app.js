newCard = document.querySelector('#btnNewCard')

let deck_id = 0;

async function init(){
    initPromise = axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    initResponse = await initPromise
    deck_id = initResponse.data.deck_id
    console.log(initResponse.data)
    console.log("DECK ID IS " + deck_id)
    id_element = document.createElement('p')
    id_element.innerText = "DECK ID: " + deck_id
    document.body.appendChild(id_element)

}

async function getNewCard() {
    newCardPromise = axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    newCard = await newCardPromise
    console.log(newCard.data)
    console.log("Suit: " + newCard.data.cards[0].suit)
    console.log("Value: " + newCard.data.cards[0].value)

  }


newCard.addEventListener('click', getNewCard)
document.addEventListener('DOMContentLoaded', init)