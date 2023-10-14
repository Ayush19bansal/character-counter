let texts = document.querySelector("#input");
let totalCharacter= document.querySelector("#totalCharacters");
let remainingCharacters= document.querySelector("#remainingCharacters");

texts.addEventListener("keyup",()=>{
  totalCharacter.innerText = texts.value.length;
  // console.log(texts.value);
  remainingCharacters.innerText =
    texts.getAttribute("maxLength") - texts.value.length;
 
});
  
