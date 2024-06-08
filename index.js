
let player = {
    name: "Per" ,
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard(){
    let value = Math.floor( Math.random() * 13 ) + 1
    if (value === 1){
        return value = 11
    }else if(value > 10){
        return value = 10
    }else{
        return value
    }
   
    }


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}
function renderGame() {
    cardEl.textContent = "Cards: "

    for(i = 0; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum

if (sum <= 20) {
    message = "Do you want to draw a new card? "
    isAlive = true
} else if (sum === 21) {
    message = "You've got Blackjack! "
     hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
}


messageEl.textContent = message
}
console.log(isAlive)

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

}





