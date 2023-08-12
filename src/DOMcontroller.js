import delIconsrc from './assets/delete.svg';

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
        delIcon.setAttribute('projectId', id);
        block.appendChild(delIcon);
        container.appendChild(block)
   });

}

function showTodos(alltodos, pr_name){
    const heading = document.querySelector('.project-head');
    heading.textContent = pr_name;
    const container = document.querySelector('.todo-container')
    container.innerHTML = '';
    alltodos.forEach((todo, ind) => {
        const todo_block = document.createElement('div');
        todo_block.classList.add('todo-item');
        todo_block.setAttribute('todo-id', ind)


    //add new divs to accomodate title, desc, duedate, and priority
    
    todo_block.textContent = todo.name;
    

    //till here
        
        
        const delIcon = new Image();
        delIcon.classList.add('delete-todo-icon');
        delIcon.src = delIconsrc;
        todo_block.appendChild(delIcon);
        container.appendChild(todo_block);
    });
    const addtodobtn = document.createElement('div');
    addtodobtn.classList.add(`add-new-todo-btn`);
    addtodobtn.textContent = "Add New Todo";
    container.appendChild(addtodobtn);  
}

function shownewTodo(todo, ind){
    const container = document.querySelector('.todo-container')
    const todo_block = document.createElement('div');
    todo_block.classList.add('todo-item');
    
    
    //add new divs to accomodate title, desc, duedate, and priority
    
    todo_block.textContent = todo.name;
    

    //till here


    todo_block.setAttribute('todo-id', ind)
    const delIcon = new Image();
    delIcon.classList.add('delete-todo-icon');
    delIcon.src = delIconsrc;
    todo_block.appendChild(delIcon);
    const btn = document.querySelector('.add-new-todo-btn')
    container.insertBefore(todo_block, btn)
}

function openTodoModal(){
    const backdrop = document.createElement('div');
    const modal = document.createElement('div');
    const btn = document.createElement('button');
    

    backdrop.classList.add('backdrop');
    modal.classList.add('modal');
    btn.classList.add('close-modal');
    btn.textContent = 'X';

    btn.addEventListener('click', function(){
        backdrop.style.display = 'none';
    });


    createForm(modal);
    modal.appendChild(btn);
    backdrop.appendChild(modal);    
    document.body.appendChild(backdrop);       


}

function createForm(container){
    container.innerHTML = `
    <form method="POST">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <label for="duedate">Due Date:</label>
        <input type="text" id="duedate" name="duedate" required>

        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <input type="button" value="Submit" class='submit-btn'>
    </form>
    `
}



export{showProjects, showTodos, shownewTodo,openTodoModal}