
export default function mainPage(){
    const container = document.querySelector('.content');
    container.appendChild(left());
    container.appendChild(right());
}

const left = () =>{
    const left_side= document.createElement('div');
    left_side.classList.add('left');

    // logo
    const logo = document.createElement('logo');
    logo.textContent = 'To-Do List';
    logo.classList.add('logo')

    // project container
    const project_container = document.createElement('div');
    project_container.classList.add('project-container');

    // adding stuff to the left side container
    left_side.appendChild(logo);
    left_side.appendChild(project_container);

    const add_project_btn = document.createElement('button');
    add_project_btn.classList.add('create-project-btn');
    add_project_btn.textContent = `Add project`;
    left_side.appendChild(add_project_btn);
    return left_side;
}





const right = () =>{
    const right_side= document.createElement('div');
    right_side.classList.add('right');

    // project heading
    const heading = document.createElement('h1');
    heading.textContent = 'Project Name';
    heading.classList.add('project-head');

    // todo container
    const todo_cont = document.createElement('div');
    todo_cont.classList.add('todo-container');

    for(var i= 0; i<4; i++){
        const elem = document.createElement('div');
        elem.textContent = `This is todo number: ${i+1}`;
        todo_cont.appendChild(elem);
    }
    
    right_side.appendChild(heading);
    right_side.appendChild(todo_cont);
    const temp_btn = document.createElement('Button');
    temp_btn.textContent = 'Check all projects';
    temp_btn.classList.add('tempbtn');
    todo_cont.appendChild(temp_btn);

    return right_side;
}