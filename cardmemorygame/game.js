const cards =
    document.getElementsByClassName("flip-container")
for (let i=0; i<cards.length; i++){
    cards[i].addEventListener("click",addClassList)
     
}
function addClassList(event){
    const card = event.currentTarget
    const id=card.getAttribute("id")
    card.classList.toggle("flip-container-flipped")
    console.log( document.getElementById(id+"-img"))
}

