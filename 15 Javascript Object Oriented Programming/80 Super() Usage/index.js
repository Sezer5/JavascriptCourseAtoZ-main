class User{
    constructor(username,email){
        this.username = username;
        this.email = email;

    }

    login(){
        console.log(`${this.username} giriş yaptı`);
        return this;
    }

    logout(){
        console.log(`${this.username} çıkış yaptı`);
        return this;
    }
};

class Admin extends User{
    constructor(username,email,title){
        super(username,email);
        this.title = title;
    }
    deleteUser(userArrived){
        users = users.filter(user => user.username !== userArrived.username)
    }
}

const userOne = new User('Sezer','sezer@gmail.com');
const userTwo = new User('Seda','seda@gmail.com');
const userThree = new Admin('Kevser','kevser@gmail.com','Textile');

console.log(userThree);