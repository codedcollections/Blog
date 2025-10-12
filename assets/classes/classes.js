class Users {
    constructor(userID, userName)
    {
        this.userID = userID;
        this.userName = userName;
    }
    shareAMessage(message){
        return `${message}`
    }
    getUserID(){
        return this.userID
    }
    printUsers(){
        return `Allt från klass Post är ${this.userID} och ${this.userName}`
    }
    setUserName(inputName){
        this.userName = inputName
        return this.userName
    }

}

class Posts extends Users{

    constructor(postID, date, title, postText, comments=[], userID, userName){
        super(userID,userName)
        this.postID = postID
        this.date = date
        this.title = title
        this.postText = postText
        this.comments = comments
    }
}

class Comments extends Users{
    constructor(commentary,date,userID,userName){
        super(userID,userName)
        this.commentary=commentary
        this.date = date
    }
}

export{Users,Posts,Comments}