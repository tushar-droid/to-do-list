import delIconsrc from './assets/delete.svg';
import ProjectFactory from './projects';

function showProjects(projects){
    const container = document.querySelector('.project-container');
    container.innerHTML  = '';

    projects.forEach((project,id) => {        
        const block = document.createElement('div');
        block.classList.add('project');
        block.setAttribute('id', id);
        block.textContent = project.name;
        const delIcon = new Image();
        delIcon.classList.add('delete-project-icon');
        delIcon.src = delIconsrc;
        block.appendChild(delIcon);
        container.appendChild(block)
   });
}


function showTodos(alltodos){
    const container = document.querySelector('.todo-container')
    container.innerHTML = '';
    alltodos.forEach(todo => {
        const todo_block = document.createElement('div');
        todo_block.classList.add('todo-item');
        todo_block.textContent = todo;
        container.appendChild(todo_block);
    });
    const addtodobtn = document.createElement('div');
    addtodobtn.classList.add(`add-new-todo-btn`);
    addtodobtn.textContent = "Add New Todo";
    container.appendChild(addtodobtn);  
       
}

function shownewTodo(todo){
    const container = document.querySelector('.todo-container')
    const todo_block = document.createElement('div');
    todo_block.classList.add('todo-item');
    todo_block.textContent = todo;
    const btn = document.querySelector('.add-new-todo-btn')
    container.insertBefore(todo_block, btn)
}



export{showProjects, showTodos, shownewTodo}