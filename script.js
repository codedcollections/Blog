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
const postArray = [
    {
        title: "title of post",
        text: "aksa dladksak da lkds dlsakalkdalkdslkdaalksdlkas dlka dlka dsald ksal dlksadlkadlksalkdak d"
    },
    {
        title: "second post",
        text: "aksld masdlm saakl dmkdlamakslm dlksa dmsa dsam ldam dklsam dakldmsldamdkd almldsk"
    }
]
const currentUser = document.querySelector("#name")
const titleText = document.querySelector("#title")
const textInput = document.querySelector("#text-input")
const submitBtn = document.querySelector("#post")
const latestDiv = document.querySelector(".latest")


function checkForm(e){
    //Stop from page reload on submitbtn click
    e.preventDefault()
    console.log("post")
    if (currentUser.value === "" || textInput.value === "" || titleText.value === ""){
        console.log("Not read properly. Please fill each input field of form 😀")
    }
    else{
        console.log(currentUser.value)
        console.log(titleText.value)
        console.log(textInput.value)
        console.log(makeTimeStamp())
        createPost(currentUser.value,titleText.value,textInput.value)
    }

}

submitBtn.addEventListener('click',checkForm)

//reads from form input
function createPost(user,title,message){
    console.log(`Post is now ${post}`)
    const newDiv = document.createElement("div")
    newDiv.className = "test-post"
    const newTitle = document.createElement("h2")
    newTitle.textContent = title
    newDiv.appendChild(newTitle)
    const newText = document.createElement("p")
    newText.textContent = message
    newDiv.appendChild(newText)
    const newUserName = document.createElement("p")
    newUserName.textContent = user
    newDiv.appendChild(newUserName)
    latestDiv.appendChild(newDiv)
}



//reads from array
function showPosts(post){
    console.log(`Post is now ${post}`)
    const newDiv = document.createElement("div")
    newDiv.className = "post"
    const newTitle = document.createElement("h2")
    newTitle.textContent = post.title
    newDiv.appendChild(newTitle)
    const newText = document.createElement("p")
    newText.textContent = post.text
    newDiv.appendChild(newText)
    latestDiv.appendChild(newDiv)
}

postArray.forEach(showPosts)

function makeTimeStamp(){
    const dateStamp = new Date();
    const fullDate = dateStamp.getFullYear() +""+ (dateStamp.getMonth() + 1);
    const alternativeDate =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}`
    console.log("You are in makeTimeStamp function now")
/*     console.log(fullDate)
    console.log(alternativeDate) */
    return alternativeDate

}

const trymakeDate = makeTimeStamp()
