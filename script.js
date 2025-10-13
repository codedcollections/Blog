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
//place to add posts in

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

postArray.forEach((element) => console.log(element))
console.log("end of forEach")
const postContainer = document.querySelector(".posts")

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
    
postContainer.appendChild(newDiv)


function checkInput(e){
    e.preventDefault()
    console.log("hi")
}