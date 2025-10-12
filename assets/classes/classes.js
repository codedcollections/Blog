class Users {
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

    constructor(postID, date, title, postText, comments=[], userID, userName, password){
        super(userID,userName, password)
        this.postID = postID
        this.date = date
        this.title = title
        this.postText = postText
        this.comments = comments
    }
}

class Comments extends Users{
    constructor(commentary,date,userID,userName, password){
        super(userID,userName, password)
        this.commentary=commentary
        this.date = date
    }
}

export{Users,Posts,Comments}