const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imageContainer = document.querySelector('.imageContainer');
const imgs = document.querySelectorAll('img');
let currentImage= 1;
let timeout;

prevIcon.addEventListener('click',()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

nextIcon.addEventListener('click',()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

function updateImage(){
    if(currentImage > imgs.length){
        currentImage = 1;
    }
    else if(currentImage < 1){
        currentImage = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImage-1)*700}px)`;
    timeout=setTimeout(()=>{
        currentImage++;
        updateImage();
    },4000);
}

updateImage();