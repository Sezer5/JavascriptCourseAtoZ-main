const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const websiteName = document.getElementById('website-name');
const websiteUrl = document.getElementById('website-url');
const backLinkForm = document.getElementById('backlink-form');
const backlinksContainer = document.getElementById('backlinks-container');

let backlinks = [];

function showModal(){
    modal.classList.add('show-modal');
    websiteName.focus();
}

function closeModal(){
    modal.classList.remove('show-modal');
}

function validate(nameValue,urlValue){
    const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
  const regex = new RegExp(expression);

  if(!nameValue || !urlValue){
    alert('Lütfen Gerekli Alanları Doldurunuz!');
    return false;
  }


  if(!urlValue.match(regex)){
    alert('Lütfen geçerli bir web site adresi giriniz!');
    return false
  };
  return true;
}

function deleteBackLink(url){
    backlinks.forEach((backlink,i)=>{
        if(backlink.url === url){
            backlinks.splice(i,1);
            
        }
    });
    localStorage.setItem('backlinks',JSON.stringify(backlinks));
    fetchBacklinks();
}

function buildBackLinks(){
    backlinksContainer.textContent = '';
    backlinks.forEach((backlink)=>{
        const {name,url}=backlink;
        const item = document.createElement('div');
        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas','fa-times');
        closeIcon.setAttribute('onclick',`deleteBackLink('${url}')`);




        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');

        item.classList.add('item');

        const link = document.createElement('a');

        link.setAttribute('href',`${url}`);
        link.setAttribute('target','_blank');
        link.textContent = name;

        linkInfo.appendChild(link);

        item.append(closeIcon,linkInfo);
        
        // item.appendChild(closeIcon);
        // item.appendChild(linkInfo);

        backlinksContainer.appendChild(item);
    })



}

function fetchBacklinks(){
    if(localStorage.getItem('backlinks')){
        backlinks = JSON.parse(localStorage.getItem('backlinks'));
    }

    buildBackLinks();
}

function storeBackLink(e){
    e.preventDefault();

    const nameValue = websiteName.value;
    let urlValue = websiteUrl.value;

    if(!urlValue.includes('https://' && !urlValue.includes('http://'))){
        urlValue = `https://${urlValue}`;
    }

    if(!validate(nameValue,urlValue)){
        return false;
    }

    const backlink = {
        name:nameValue,
        url:urlValue,
      };

    backlinks.push(backlink);

    localStorage.setItem('backlinks',JSON.stringify(backlinks));
    modal.classList.remove('show-modal');
    fetchBacklinks();

    backLinkForm.reset();
    websiteName.focus();
}

modalShow.addEventListener('click',showModal);
modalClose.addEventListener('click',closeModal);
backLinkForm.addEventListener('submit',storeBackLink);

fetchBacklinks();
