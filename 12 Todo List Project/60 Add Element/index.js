const addform = document.querySelector('.add');
const list = document.querySelector('.todos');


const generateTemplate = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML+=html;
    
}

addform.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addform.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addform.reset();
    }
})