import delIconsrc from './assets/delete.svg';

function showProjects(projects){
    const container = document.querySelector('.project-container');
    container.innerHTML  = '';
    const delIcon = new Image();
    delIcon.classList.add('delete-project-icon');
    delIcon.src = delIconsrc;
    projects.forEach((project,id) => {        
        const block = document.createElement('div');
        block.classList.add('project');
        block.setAttribute('id', id);
        block.textContent = project.name;
        block.appendChild(delIcon);
        container.appendChild(block)
        console.log(project)
    });
}


function showTodos(alltodos){
    const container = document.querySelector('.todo-container')
    container.innerHTML = '';
    console.log('DOM contrroller says: ', alltodos)
    alltodos.forEach(todo => {
        const todo_block = document.createElement('div');
        todo_block.classList.add('todo-item');
        todo_block.textContent = todo;
        container.appendChild(todo_block);
    });

}


export{showProjects, showTodos}