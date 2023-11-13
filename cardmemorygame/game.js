const flipContainer =
    document.getElementsByClassName("flip-container")
for (let i=0; i<flipContainer.length; i++){
    flipContainer[i].addEventListener("click",addClassList)
     
}
function addClassList(event){
    const flipContainer = event.currentTarget

    const id=flipContainer.getAttribute("id")

    flipContainer.classList.toggle("flip-container-flipped")
    console.log( document.getElementById(id+"-img"))
}
// const cards = document.querySelectorAll('.flipper')
// let hasFlippedCard= false;
// let firstCard,secondCard;

// function flipCard(){
//     this.classList.add('flip');
//     if(!hasFlippedCard){
//         hasFlippedCard=true;
//         firstCard=this;
//     }
// }
// cards.forEach(card=>card.addEventListener('click',flipCard));
