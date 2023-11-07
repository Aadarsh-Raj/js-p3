const card = document.getElementsByClassName("card")[0];
const totalCharacter = document.getElementById("character-entered-number");
const remainingCharacter = document.getElementById("character-remaining-number");
card.addEventListener("keyup", (e)=>{
    let x = e.target.value.length;
    totalCharacter.innerText = x;
    let y = 50 - x+1;
    y--;
    console.log(y);
    
    remainingCharacter.innerText= y;
})