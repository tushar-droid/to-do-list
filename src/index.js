import './styles.css';
import mainPage from './mainPage';
import todoFactory from './todo';
import ProjectFactory from './projects';
import { showProjects, showTodos,shownewTodo } from './DOMcontroller';
var todoarray = [];
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
        temp_btn.forEach(btn => {
            btn.addEventListener("click", (event) => {
                const target_id = event.target.id
                showTodos(projectslist[target_id].getAllTodos());    
                const addbtn = document.querySelector('.add-new-todo-btn');
                addbtn.addEventListener('click', function(){
                    var t= 'this is the new todo';
                    projectslist[target_id].addTodo(t);
                    shownewTodo(t);
                })

            }); 
        });
    }
    



    // const tempbtn = document.querySelector('.tempbtn');
    // tempbtn.addEventListener("click", function(){
    //     const name= window.prompt('Enter Name: ');
    //     const desc = window.prompt('Enter Desciption: ');
    //     const date = window.prompt('Enter Due Date: ');
    //     const pr = window.prompt('Enter Priority: ');
    //     var val = todoFactory(name, desc, date, pr);
    //     todoarray.push(val);
    //     console.log(todoarray)
    // })





})();