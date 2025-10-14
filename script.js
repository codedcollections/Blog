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

/* const dateStamp = new Date();
const dateAndTime =`${dateStamp.getFullYear()}-${dateStamp.getMonth() + 1}-${dateStamp.getDate()} ${dateStamp.getHours()}:${dateStamp.getMinutes()}` */

let postArray =[
    {
        "author":"Adam",
        "title":"My first post",
        "postContent":"Where to begin? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut placeat explicabo vero, id corporis laboriosam repellat debitis quasi, omnis facilis totam tenetur vel doloremque iure nesciunt blanditiis eligendi, dolores distinctio. Until next time!",
        "date": makeTimeStamp()
    }
]

const AllPostsContainer = document.querySelector(".all-posts")

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
    likeCount.textContent = 0
    likeBtn.addEventListener('click',()=>{likeCount.textContent++})
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
    dislikeCount.textContent = 0
    dislikeBtn.addEventListener('click',()=>{dislikeCount.textContent--})
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