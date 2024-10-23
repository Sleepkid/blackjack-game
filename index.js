let player = {
    name : "sleepkid",
    chips : 500
}
let cards = []
let sum = 0
let  hasBlackJack = false
let isAlive = false
let message = " "
let  messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let  cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ":" + " " + "$" + player.chips


function getRandomCard(){
 let randomNumer = Math.floor( Math.random() * 13 ) + 1
if (randomNumer > 10){
    return 10
   }else if (randomNumer === 1){
    return 11
   }else {
    return randomNumer
   }
}  
    function STARTGAME(){
         isAlive = true
        let firstcard =  getRandomCard()
        let secondcard =  getRandomCard()
       cards =[firstcard , secondcard]
       sum = firstcard + secondcard
    renderGAME()
}

 function renderGAME(){
    cardsEl.textContent =  "Cards:" 
 for( i = 0; i< cards.length; i ++){
    cardsEl.textContent += cards[i] + ", "
}
    sumEl.textContent ="sum:"  +  sum 
    if (sum <= 20 ){
        message = "Do you want to draw a new card? "
   }else if (sum === 21){
      message = " You've got Blackjack! "
       hasBlackJack = true
    }else {
      message = "You're out of the game! "
       isAlive = false
    }

    messageEl.textContent = message
 }


   function NEWCARD(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGAME()
    }

 }

