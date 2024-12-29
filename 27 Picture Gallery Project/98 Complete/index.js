const count = 30;
const apiKey = '76T6I4qiPZ5lwp_54WC4ljF-Qwzz2qtK2e10eBSzBS4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const loading = document.getElementById('loading');
const imageContainer = document.getElementById('imageDiv');
let imagesLoaded = 0;
let totalImages = 0;
let isDownloaded = false;
let imagesArray=[];
getImages();
async function getImages(){
    try {
        const response = await fetch(apiUrl);
        
        imagesArray = await response.json();

        displayImages();

    } catch (error) {
        
    }
}

function displayImages(){
    imagesLoaded = 0;
    totalImages = imagesArray.length;
    imagesArray.forEach((image)=>{
        const item = document.createElement('a');
        setAttributes(item,{href:image.urls.regular});
        // item.setAttribute('href',image.urls.regular);

        const img = document.createElement('img');
        // img.setAttribute('src',image.urls.regular);
        // img.setAttribute('alt',image.alt_description);
        setAttributes(img,{
            src:image.urls.regular,
            alt:image.alt_description
        });

        img.addEventListener('load',imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        isDownloaded = true;
        loading.hidden = true;
    }
}

function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

window.addEventListener('scroll',()=>{
    
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && isDownloaded) // Browserin yüksekliği ve y ekseninde ne kadar scrolladığımız ve içindeki içeriklerin yükseliği
    {
        getImages();
    }
})

