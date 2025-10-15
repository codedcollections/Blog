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


const firstPost = new Posts("Adam",makeTimeStamp(),"My first post","Where to begin? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Until next time!",3,- 4)

let postArray =[firstPost]

const AllPostsContainer = document.querySelector(".all-posts")

const editModeBtn = document.querySelector(".edit-mode")
//from add post form
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const titleInput = document.querySelector("#title")
const postTextInput = document.querySelector("#post-text-input")
const postSubmitBtn = document.querySelector("#add-post-submit")
const addFormError = document.querySelector(".add-post-error")
let currentUser = 0

function renderPost(postObject){
    //Holds all information about a post
    const postContainer = document.createElement("div")
    postContainer.className = "post l-flex l-flex--down"
    //div for delete button
    const deleteContainer = document.createElement("div")
    deleteContainer.className = "delete-div l-flex l-flex--end"
    const deleteBtn = document.createElement("img")
    deleteBtn.className = "delete-btn editable"
    deleteBtn.src = "assets/symbols/trash.svg"
    deleteBtn.alt = "trash can icon"
    deleteBtn.addEventListener('click',()=>{
        postContainer.remove()
        deletePost(postObject)
    })
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
    likeBtn.addEventListener('click',()=>{
        postObject.addLike()
        likeCount.textContent = postObject.likes})
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
    dislikeBtn.addEventListener('click',()=>{
        postObject.addDislike()
        dislikeCount.textContent = postObject.dislikes})
    dislikeBtn.appendChild(dislikeCount)
    const dislikeSymbol = document.createElement("img")
    dislikeSymbol.src = "assets/symbols/dislike.svg"
    dislikeSymbol.alt = "thumbs down icon"
    dislikeSymbol.className = "reaction-btn"
    dislikeBtn.appendChild(dislikeSymbol)
    likesContainer.appendChild(dislikeBtn)
    const formHTML = createCommentForm()

    postContainer.appendChild(likesContainer)
    postContainer.appendChild(formHTML)
    AllPostsContainer.appendChild(postContainer)
}

function createCommentForm(){
    const commentForm = document.createElement("form")
    commentForm.className="comment-form"
    const commentInput = document.createElement("input")
    commentInput.setAttribute('type', 'text')
    commentInput.id = "comment"
    commentInput.placeholder ="add a comment..."
    const commentSubmitBtn = document.createElement("input")
    commentSubmitBtn.setAttribute('type', 'submit')
    commentSubmitBtn.value ="Comment"
    commentSubmitBtn.id ="post-comment-btn"
    commentSubmitBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        const newComment = document.createElement("p")
        newComment.textContent = `Comment made ${makeTimeStamp()}: ${commentInput.value} `
        commentInput.value=""
        commentContainer.appendChild(newComment)
    })
    const commentContainer = document.createElement("div")
    commentContainer.className ="comments-container"
    commentForm.appendChild(commentInput)
    commentForm.appendChild(commentSubmitBtn)
    commentForm.appendChild(commentContainer)
    console.log(commentForm)
    return (commentForm)
}
function isUser(e){
    e.preventDefault()

    addFormError.innerHTML = ""

    const eMessage = document.createElement("p")
    eMessage.textContent = "Incorrect username or password. Try again."
    eMessage.className = "e-message"

    //changes currentUser from 0 to userObject if true
    userArray.forEach(compareInput)

    if(!(currentUser ===0)){

        const addedPost = createPost(currentUser)
        postArray.push(addedPost)
        AllPostsContainer.innerHTML =""
        postArray.forEach((element) => renderPost(element))
        //reset - allow for new input in userName and password
        currentUser=0
    }
    else{
        addFormError.appendChild(eMessage)
    }
    restorePlaceholder()
}

function restorePlaceholder(){
    usernameInput.value= usernameInput.ariaPlaceholder
    usernameInput.value= usernameInput.ariaPlaceholder
    passwordInput.value= passwordInput.ariaPlaceholder
    titleInput.value= titleInput.ariaPlaceholder
    postTextInput.value= postTextInput.ariaPlaceholder
}

function compareInput(item){
    if (item.userName === usernameInput.value && item.password === passwordInput.value){
        currentUser = item
    }
    return (currentUser)
}

function createPost(user){
    const newPost = new Posts(user.name,makeTimeStamp(),titleInput.value,postTextInput.value)
    return(newPost)
}

function deletePost(postObject){
    const itemIndex = postArray.indexOf(postObject)
    if (itemIndex !== -1) {
    postArray.splice(itemIndex, 1);
    }
}

function readOrEdit(){
    const interactiveElements = document.querySelectorAll(".editable")
    interactiveElements.forEach(ShowAndHide)
    if (editModeBtn.src.includes("assets/symbols/edit.svg")){
        editModeBtn.src = "assets/symbols/cross.svg"
    }
    else{
        editModeBtn.src = "assets/symbols/edit.svg"
    }
}
function ShowAndHide(item){
    if (item.classList.contains('hidden')){
        item.classList.remove('hidden')
    }
    else{
        item.classList.add("hidden")
    }
    
}

function makeTimeStamp(){
    const dateStamp = new Date();
    const dateAndTime =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}`
    return dateAndTime
}

//starts reading first example in postarray
postArray.forEach((element) => renderPost(element))
readOrEdit()

editModeBtn.addEventListener('click',readOrEdit)

postSubmitBtn.addEventListener('click',isUser)

