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

const userOne = new User('Sezer','sezer@gmail.com');
const userTwo = new User('Seda','seda@gmail.com');

// console.log(userOne);
// console.log(userTwo);
userTwo.login().logout().logout();