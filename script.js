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
const titleText = document.querySelector("#title")
const textInput = document.querySelector("#text-input")
const submitBtn = document.querySelector("#post")
const latestDiv = document.querySelector(".latest")


function checkForm(e){
    //Stop from page reload on submitbtn click
    e.preventDefault()
    console.log("post")
    //needs to be read on button press, otherwise no chosen radio button and no value
    const currentUser = document.querySelector('input[name="user"]:checked').value;
    
    if (textInput.value === "" || titleText.value === ""){
        console.log("Not read properly. Please fill each input field of form 😀")
    }
    else{
        console.log(currentUser)
        console.log(titleText.value)
        console.log(textInput.value)
        console.log(makeTimeStamp())
        createPost(currentUser,titleText.value,textInput.value)
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


const localBtn = document.querySelector(".local-btn")
let clickCounter = 1;
function storeLocally(){
    console.log("entered storeLocally")
    if (!(clickCounter%2 == 0)){
        // Spara data i localStorage
        localStorage.setItem('username', 'JohnDoe');
        localStorage.setItem('email', 'john@example.com');

        // Hämta data från localStorage
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        console.log(`${username} and ${email}`)
    }
    else{
        localStorage.clear()
        console.log("cleared storage")
        console.log(`the values of username and email are now:${username} and ${email}`)
    }
    clickCounter++
}

localBtn.addEventListener('click', storeLocally)


class Post {
    constructor(userID, userName)
    {
        this.userID = userID;
        this.userName = userName;
    }
    shareAMessage(message){
        return `${message}`
    }
    addID(){
        return this.userID ++
    }
    getClassParts(){
        return `Allt från klass Post är ${this.userID} och ${this.userName}`
    }

}

//Add info here to Class
/*
OBS! Any additional input from user needs to be a part of the code below
Not in declaration of the class
 */
const post1 = new Post(1,"Adam")
console.log(post1.shareAMessage("Let's write a message here"))
console.log(post1.getClassParts())
