const userOne = {
    username:'Sezer',
    email:'sss@gmail.com',
    login(){
        console.log('Sezer Giriş Yaptı');
    },
    logout(){
        console.log('Sezer Çıkış Yaptı');
    }
};

console.log(userOne.username,userOne.email);
userOne.login();