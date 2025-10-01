/*
### **1. Strukturera projektet**

Bygg en bloggplattform som innehåller följande delar:

1. **Startsida:**
    - Visa de senaste blogginläggen på en startsida.
    - Varje blogginlägg ska visa titel, författare, datum och innehåll.
2. **Skapa inlägg:**
    - Skapa en form där användaren kan skriva en titel och innehåll för sitt blogginlägg.
    - Använd JavaScript för att hantera skapandet och visningen av nya inlägg.
3. **Interaktivitet:**
    - Skapa dynamisk funktionalitet så att användaren kan skapa nya inlägg utan att behöva ladda om sidan.
    - När ett inlägg är skapat ska det visas direkt på sidan.
4. **Responsiv Design:**
    - Se till att webbplatsen fungerar bra på olika enheter, både på dator och mobil. Använd CSS för att säkerställa en bra användarupplevelse på alla skärmstorlekar.
*/
const currentName = document.querySelector("#name")
const textInput = document.querySelector("#text-input")
const submitBtn = document.querySelector("#post")

function addPost(e){
    //Stop from page reload on submitbtn click
    e.preventDefault()
    console.log("post")
    console.log(currentName.value)
    console.log(textInput.value)

}
submitBtn.addEventListener('click',addPost)