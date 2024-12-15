class User{
    constructor(username,email){
        this.username = username;
        this.email = email;

    }

    login(){
        return `${this.username} giriş yaptı`;
    }

    logout(){
        return `${this.username} çıkış yaptı`;
    }
};

const userOne = new User('Sezer','sezer@gmail.com');
const userTwo = new User('Seda','seda@gmail.com');

console.log(userOne);
console.log(userTwo);
console.log(userTwo.logout());