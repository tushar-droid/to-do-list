import delIconsrc from './assets/delete.svg';
import { format, compareAsc, parseISO } from 'date-fns';


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
        
        const pr = document.createElement('div');
        const title = document.createElement('div');
        const desc = document.createElement('div');
        const duedate = document.createElement('div');
        pr.classList.add('todo-priority')
        pr.classList.add(todo.priority);
        title.textContent = todo.name;
        desc.textContent = todo.desc;
        duedate.textContent = format(parseISO(todo.duedate), 'MM/dd/yyyy');

        title.classList.add('todo-title')
        desc.classList.add('todo-desc')
        duedate.classList.add('todo-duedate');




        todo_block.appendChild(pr);
        todo_block.appendChild(title);
        todo_block.appendChild(desc);
        todo_block.appendChild(duedate);
        
        const delIcon = new Image();
        delIcon.classList.add('delete-todo-icon');
        delIcon.src = delIconsrc;
        todo_block.appendChild(delIcon);
        container.appendChild(todo_block);
        todo_block.addEventListener('click', openTodo)
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
    const pr = document.createElement('div');
    pr.classList.add('todo-priority')
    const title = document.createElement('div');
    title.classList.add('todo-title')
    const desc = document.createElement('div');
    desc.classList.add('todo-desc')
    const duedate = document.createElement('div');
    duedate.classList.add('todo-duedate');

    pr.classList.add(todo.priority);
    title.textContent = todo.name;
    desc.textContent = todo.desc;
    duedate.textContent = format(parseISO(todo.duedate), 'MM/dd/yyyy');

    todo_block.appendChild(pr);
    todo_block.appendChild(title);
    todo_block.appendChild(desc);
    todo_block.appendChild(duedate);
  

    todo_block.setAttribute('todo-id', ind)
    const delIcon = new Image();
    delIcon.classList.add('delete-todo-icon');
    delIcon.src = delIconsrc;
    todo_block.appendChild(delIcon);
    const btn = document.querySelector('.add-new-todo-btn')
    container.insertBefore(todo_block, btn);
    todo_block.addEventListener('click', openTodo)
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
        backdrop.remove();
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
        <textarea id="description" name="description" rows="5" required></textarea>
        <label for="duedate">Due Date:</label>
        <input type="date" id="duedate" name="duedate" required>

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

function openTodo(event){
    if(event.target.classList == 'delete-todo-icon'){
        return;
    }
    const bd = document.createElement('div')
    const modal = document.createElement('div');
    const modal_cont = document.createElement('div');
    modal_cont.classList.add('todo-modal-container');
    modal.classList.add('todo-modal');   
    const title = document.createElement('h1');
    const desc = document.createElement('h2');
    const pr = document.createElement('h2');
    const duedate = document.createElement('h2');
    title.textContent =`TITLE: \u00A0\u00A0\u00A0\u00A0 ${this.querySelector('.todo-title').textContent}`;
    desc.textContent = `DESCRIPTION: \u00A0\u00A0\u00A0\u00A0 ${this.querySelector('.todo-desc').textContent}`;
    duedate.textContent = `DUE DATE: \u00A0\u00A0\u00A0\u00A0 ${this.querySelector('.todo-duedate').textContent}`;
    pr.textContent = `PRIORITY: \u00A0\u00A0\u00A0\u00A0 ${this.querySelector('.todo-priority').classList[1]}`;
    modal_cont.appendChild(title);
    modal_cont.appendChild(desc);
    modal_cont.appendChild(duedate);
    modal_cont.appendChild(pr);
    modal.appendChild(modal_cont);
    const btn = document.createElement('button');
    btn.classList.add('close-modal');
    btn.textContent = 'X';
    btn.addEventListener('click', function(){
        bd.remove();
    });


    modal.appendChild(btn);



    bd.classList.add('backdrop');
    bd.appendChild(modal);
    document.body.appendChild(bd);
}




export{showProjects, showTodos, shownewTodo,openTodoModal}