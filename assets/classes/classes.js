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
        return this.likes++
    }
    addDislike(){
        return this.dislikes--
    }
    hasComments(){
        if(this.comments.length === 0)
            return false
        else{
            return true
        }
    }
    addComment(comment){
        this.comments.push(comment)
        return this.comments
    }
    removeComment(comment){
        const itemIndex = this.comments.indexOf(comment)
        if (itemIndex !== -1) {
        this.comments.splice(itemIndex, 1);
    }
    }
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
