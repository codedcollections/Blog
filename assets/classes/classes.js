class Posts{
    constructor(author, date, title, postContent, likes = 0,dislikes = 0, comments=[]){
        this.author = author
        this.date = date
        this.title = title
        this.postContent = postContent
        this.likes = likes,
        this.dislikes = dislikes
        this.comments=comments
    }
    addLike(){
        return(this.likes++)
    }
    addDislike(){
        return(this.dislikes--)
    }
    hasComments(){
        if(this.comments.length === 0)
            return(false)
        else{
            return(true)
        }
    }
    addComment(comment){
        console.log("method reads comment as" + comment)
        console.log("after stringify" + JSON.stringify(comment))
        console.log("the array is" + this.comments.length)
        console.log("array is" + JSON.stringify(this.comments))
        this.comments.push(comment)
        console.log("length after push" + this.comments.length)
        console.log("array is" + JSON.stringify(this.comments))
        return(this.comments)
    }
    removeComment(comment){
        console.log(`this came to removeComment ${comment}`)
        const itemIndex = this.comments.indexOf(comment)
        if (itemIndex !== -1) {
        this.comments.splice(itemIndex, 1);
    }
    }
/*     addComment(array,comment){
        array.push(comment)
        return this.comments
    }
    deleteComment(array,comment){
        //find index of comment in array indexOf()
        //splice this.comments array remove from index, 1 object
        //no more saved comment on array spot
    } */
    printPost(){
        return `userName: ${this.author} \ndate: ${this.date} \ntitle: ${this.title} \npostContent: ${this.postContent} \nlikes: ${this.likes} \ndislikes: ${this.dislikes}`
    }
}
class Comments{
    constructor(comment,date){
        this.comment = comment
        this.date = date
    }
}
export{Posts,Comments}
