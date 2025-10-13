let userArray = [
    {
        "userID": 1,
        "userName": "myNameIsAdam",
        "name": "Adam",
    },
    {
        "userID": 2,
        "userName": "CallMeNora",
        "name": "Nora"
    }
]

const dateStamp = new Date();
const dateAndTime =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}`

let postArray =[
    {
        "author":"Adam",
        "title":"My first post",
        "postContent":"Wheren to begin? Until next time!",
        "date":dateAndTime
    }
]
const AllPostsContainer = document.querySelector(".all-posts")
function renderPost(postObject){
    //Holds all information about a post
    const postContainer = document.createElement("div")
    postContainer.className = "post"
    //div for delete button
    const deleteContainer = document.createElement("div")
    deleteContainer.className = "delete-div"
    const deleteBtn = document.createElement("img")
    deleteBtn.src = "assets/symbols/trash.svg"
    deleteBtn.alt = "trash can symbol"
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
    const postedBy = `Posted by ${postObject.author} ${postObject.date}`
    postInfo.textContent = postedBy
    postContainer.appendChild(postInfo)

    const postText = document.createElement("p")
    postText.className="post-text"
    postText.textContent = postObject.postContent
    postContainer.appendChild(postText)

    const likesContainer = document.createElement("div")
    likesContainer.className = "likes-div"

    const likeBtn = document.createElement("button")
    likeBtn.textContent = 0
    likeBtn.addEventListener('click',()=>{likeBtn.textContent++})
    likesContainer.appendChild(likeBtn)
    const dislikeBtn = document.createElement("button")
    dislikeBtn.textContent = 0
    dislikeBtn.addEventListener('click',()=>{dislikeBtn.textContent--})
    likesContainer.appendChild(dislikeBtn)
    postContainer.appendChild(likesContainer)
    AllPostsContainer.appendChild(postContainer)
}

/* postArray.forEach((element) => console.log(element))
console.log("end of forEach") */

postArray.forEach((element) => renderPost(element))

/* const postContainer = document.querySelector(".posts")
const newDiv = document.createElement("div")
newDiv.style.backgroundColor="red"
const newDeleteBtn = document.createElement("button")
newDeleteBtn.textContent ="delete the div"
newDeleteBtn.addEventListener('click',()=>{
    newDiv.remove()
})
newDiv.appendChild(newDeleteBtn)

const newLikeBtn = document.createElement("button")
newLikeBtn.textContent = 0
newLikeBtn.addEventListener('click',()=>{newLikeBtn.textContent++})
newDiv.appendChild(newLikeBtn)

const newDislikeBtn = document.createElement("button")
newDislikeBtn.textContent = 0
newDislikeBtn.addEventListener('click',()=>{newDislikeBtn.textContent--})
newDiv.appendChild(newDislikeBtn)
    
postContainer.appendChild(newDiv) */


function checkInput(e){
    e.preventDefault()
    console.log("hi")
}