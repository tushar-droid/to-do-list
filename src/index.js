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
            btn.addEventListener("click", (event) => {         
                const prev_proj = document.querySelector('.active-project');
                if(prev_proj){
                    prev_proj.classList.remove('active-project');
                }                
                btn.classList.add('active-project');
                const target_id = event.target.id;
                if(event.target.className == 'delete-project-icon'){
                    return
                }
                showTodos(projectslist[target_id].getAllTodos(), projectslist[target_id].name);                    
                const addbtn = document.querySelector('.add-new-todo-btn');
                addbtn.addEventListener('click', function(){
                    var newtodo = window.prompt('Enter the New todo');
                    projectslist[target_id].addTodo(newtodo);
                    shownewTodo(newtodo);                    
                })

            }); 
        });

    }
    
    function deleteProject(event){
        console.log("deleteing the item")
        const projectId = this.getAttribute("projectid");
        projectslist.splice(projectId, 1);
        console.log(projectslist);
        projectscontroller();
    }






})();