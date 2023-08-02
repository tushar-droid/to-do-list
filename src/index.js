import './styles.css';
import mainPage from './mainPage';
import todoFactory from './todo';
import ProjectFactory from './projects';
import { showProjects, showTodos } from './DOMcontroller';
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
        showProjects(projectslist);      
        const temp_btn = document.querySelectorAll('.project');
        temp_btn.forEach(btn => {
            btn.addEventListener("click", getalltodos)
        });
    });

    function getalltodos(event){
        showTodos(projectslist[event.target.id].getAllTodos());        
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