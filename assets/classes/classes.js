class Posts{
    constructor(author, date, title, postContent, likes = 0,dislikes = 0){
        this.author = author
        this.date = date
        this.title = title
        this.postContent = postContent
        this.likes = likes,
        this.dislikes = dislikes
    }
    addLike(){
        return(this.likes++)
    }
    addDislike(){
        return(this.dislikes--)
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
export{Posts}
