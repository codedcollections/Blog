import { Posts } from "./assets/classes/classes.js";

let userArray = [
    {
        "userID": 1,
        "userName": "myNameIsAdam",
        "password": "111",
        "name": "Adam",
    },
    {
        "userID": 2,
        "userName": "CallMeNora",
        "password": "112",
        "name": "Nora"
    },
    {
        "userID": 3,
        "userName": "A",
        "password": "1",
        "name": "Amelia",
    }
]

/* const dateStamp = new Date();
const dateAndTime =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}` */
const firstPost = new Posts("Adam",makeTimeStamp(),"My first post","Where to begin? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Until next time!",3,4)

let postArray =[firstPost]

const AllPostsContainer = document.querySelector(".all-posts")

//from add post form

const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const titleInput = document.querySelector("#title")
const postTextInput = document.querySelector("#post-text-input")
const postSubmitBtn = document.querySelector("#add-post-submit")
const addFormError = document.querySelector(".add-post-error")

function renderPost(postObject){
    //Holds all information about a post
    const postContainer = document.createElement("div")
    postContainer.className = "post l-flex l-flex--down"
    //div for delete button
    const deleteContainer = document.createElement("div")
    deleteContainer.className = "delete-div l-flex l-flex--end"
    const deleteBtn = document.createElement("img")
    deleteBtn.src = "assets/symbols/trash.svg"
    deleteBtn.alt = "trash can icon"
    deleteBtn.className = "delete-btn"
    deleteBtn.addEventListener('click',()=>{postContainer.remove()})
    deleteContainer.appendChild(deleteBtn)
    postContainer.appendChild(deleteContainer)
    //information presented in post
    const postTitle = document.createElement("h2")
    postTitle.className="post-title"
    postTitle.textContent = postObject.title
    postContainer.appendChild(postTitle)

    const postInfo = document.createElement("p")
    //contains date and name of post author
    postInfo.className = "post-info"
    const postedBy = `posted by ${postObject.author} ${postObject.date}`
    postInfo.textContent = postedBy
    postContainer.appendChild(postInfo)

    const postText = document.createElement("p")
    postText.className="post-text"
    postText.textContent = postObject.postContent
    postContainer.appendChild(postText)

    const likesContainer = document.createElement("div")
    likesContainer.className = "likes-div l-flex"

    const likeBtn = document.createElement("button")
    likeBtn.className="like-btn l-flex"
    const likeCount = document.createElement("span")
    likeCount.className="like-num"
    likeCount.textContent = postObject.likes
    likeBtn.addEventListener('click',()=>{likeCount.textContent = postObject.addLike()})
    likeBtn.appendChild(likeCount)
    const likeSymbol = document.createElement("img")
    likeSymbol.src = "assets/symbols/like.svg"
    likeSymbol.alt = "thumbs up icon"
    likeSymbol.className = "reaction-btn"
    likeBtn.appendChild(likeSymbol)
    likesContainer.appendChild(likeBtn)

    const dislikeBtn = document.createElement("button")
    dislikeBtn.className ="dislike-btn l-flex"
    const dislikeCount = document.createElement("span")
    dislikeCount.className="dislike-num"
    dislikeCount.textContent = postObject.dislikes
    dislikeBtn.addEventListener('click',()=>{dislikeCount.textContent = postObject.addDislike()})
    dislikeBtn.appendChild(dislikeCount)
    const dislikeSymbol = document.createElement("img")
    dislikeSymbol.src = "assets/symbols/dislike.svg"
    dislikeSymbol.alt = "thumbs down icon"
    dislikeSymbol.className = "reaction-btn"
    dislikeBtn.appendChild(dislikeSymbol)
    likesContainer.appendChild(dislikeBtn)



/*     const dislikeBtn = document.createElement("button")
    dislikeBtn.textContent = 0
    dislikeBtn.addEventListener('click',()=>{dislikeBtn.textContent--})
    likesContainer.appendChild(dislikeBtn) */
    console.log(likesContainer)
    postContainer.appendChild(likesContainer)
    console.log(postContainer)
    AllPostsContainer.appendChild(postContainer)
}

postArray.forEach((element) => renderPost(element))
let currentUser = 0

function isUser(e){
    e.preventDefault()
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    addFormError.innerHTML = ""

    const eMessage = document.createElement("p")
    eMessage.textContent = "Incorrect username or password. Try again."
    eMessage.className = "e-message"

    userArray.forEach(compareInput)

    console.log(`I can now see that ${currentUser.userName}`)
    if(!(currentUser ===0)){
        console.log("move on")
        const addedPost = createPost(currentUser)
        postArray.push(addedPost)
        AllPostsContainer.innerHTML =""
        postArray.forEach((element) => renderPost(element))
    }
    else{
        addFormError.appendChild(eMessage)
        console.log("incorrect username or password")
/*         
        currentUser = 0 */
    }
    usernameInput.value= usernameInput.ariaPlaceholder
    passwordInput.value= passwordInput.ariaPlaceholder
    titleInput.value= titleInput.ariaPlaceholder
    postTextInput.value= postTextInput.ariaPlaceholder
}

function compareInput(item){
    if (item.userName === usernameInput.value && item.password === passwordInput.value){
        console.log("it is true")
        console.log(`${item.userName}`)
        console.log(`${item.password}`)
        currentUser = item
    }
    else{
        console.log("nope not a user")
        console.log(item.userName)
        console.log(item.password)
    }
    console.log(`after if comparison is ${currentUser}`)
    return (currentUser)
}
function createPost(user){
    console.log(`user that was sent in was ${user}`)
    const newPost = new Posts(user.name,makeTimeStamp(),titleInput.value,postTextInput.value)
    console.log(newPost.printPost())
    return(newPost)
/*     user.name
    makeTimeStamp()
    titleInput.value
    usernameInput.value
    passwordInput.value */

}

postSubmitBtn.addEventListener('click',isUser)

function makeTimeStamp(){
    const dateStamp = new Date();
    const dateAndTime =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}`
    console.log("You are in makeTimeStamp function now")
    return dateAndTime
}

function checkInput(e){
    e.preventDefault()
    console.log("hi")
}