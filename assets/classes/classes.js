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
/* class Users {
    constructor(userID, userName, password)
    {
        this.userID = userID;
        this.userName = userName;
        this.password = password;
    }
    shareAMessage(message){
        return `${message}`
    }
    getUserID(){
        return this.userID
    }
    printUsers(){
        return `Allt från klass Post är ${this.userID} och ${this.userName} och ${this.password}`
    }
    setUserName(inputName){
        this.userName = inputName
        return this.userName
    }

}

class Posts extends Users{

    constructor(postID, date, title, postText, userID, userName, password, comments=[]){
        super(userID,userName, password)
        this.postID = postID
        this.date = date
        this.title = title
        this.postText = postText
        this.comments = comments
    }
    addComment(comment){
        this.comments.push(comment)
        return this.comments
    }
    printPost(){
        return `From Post object there postID ${this.postID} date ${this.date} title ${this.title} postText ${this.postText} comment ${JSON.stringify(this.comments)} ${this.userID} and ${this.userName} and ${this.password}`
    }
}

class Comments extends Users{
    constructor(commentary,date,userID,userName, password){
        super(userID,userName, password)
        this.commentary=commentary
        this.date = date
    }
}

export{Users,Posts,Comments} */