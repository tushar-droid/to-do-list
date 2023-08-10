import './styles.css';
import mainPage from './mainPage';
import todoFactory from './todo';
import ProjectFactory from './projects';
import { showProjects, showTodos,shownewTodo } from './DOMcontroller';
const servePage = (() =>{
    var projectslist = [];
    mainPage();
    const project_btn = document.querySelector('.create-project-btn');
    project_btn.addEventListener('click', function(){
        const name= window.prompt('Enter Name for the Project: ');
        if (name){
        projectslist.push(ProjectFactory(name));
        }
        else{
            alert("Name cannot be Empty")            
        }
        projectscontroller();

    });
    function projectscontroller(){
        showProjects(projectslist);      
        const temp_btn = document.querySelectorAll('.project');
        const delbtn = document.querySelectorAll('.delete-project-icon');
        delbtn.forEach(element => {
            element.addEventListener('click', deleteProject)
        });
        temp_btn.forEach(btn => {
            btn.addEventListener("click", projectClick); 
        });
    }


    function projectClick(event){
        const prev_proj = document.querySelector('.active-project');                
                if(prev_proj){
                    prev_proj.classList.remove('active-project');
                    console.log('this also worked')
                }              
                this.classList.add('active-project');
                const target_id = event.target.id;
                if(event.target.className == 'delete-project-icon'){
                    return
                }
                showTodos(projectslist[target_id].getAllTodos(), projectslist[target_id].name);          
                TodoController(target_id);   

    }



    
    function deleteProject(event){
        const projectId = this.getAttribute("projectid");
        projectslist.splice(projectId, 1);        
        projectscontroller();
        const prev_project = document.getElementById(projectId-1);
        //projectClick(document.getElementById(projectId-1))
        // projectClick());
    }

    function TodoController(target_id){
        var delTodoIcon = document.querySelectorAll('.delete-todo-icon');
        delTodoIcon.forEach(el => {
            el.addEventListener('click', deleteTodo)
        });          
        const addbtn = document.querySelector('.add-new-todo-btn');
        addbtn.addEventListener('click', function(){
            var newtodo = window.prompt('Enter the New todo');
            projectslist[target_id].addTodo(newtodo);
            shownewTodo(newtodo, projectslist[target_id].todosInd());   
            delTodoIcon = [];
            delTodoIcon = document.querySelectorAll('.delete-todo-icon')
            delTodoIcon.forEach(icon => {
                icon.addEventListener('click', deleteTodo);
            });                                               
        })   
    }




    function deleteTodo(){
        const proj = document.querySelector('.active-project');
        const activeProject = proj.id;
        const todoId = this.parentNode.getAttribute('todo-id');
        projectslist[activeProject].alltodos.splice(todoId, 1);        
        showTodos(projectslist[activeProject].getAllTodos(), projectslist[activeProject].name);          
        TodoController(activeProject)
    }
})();