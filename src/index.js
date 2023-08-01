import './styles.css';
import mainPage from './mainPage';
import todoFactory from './todo';
import ProjectFactory from './projects';
import { showProjects } from './DOMcontroller';
var todoarray = [];
const servePage = (() =>{
    var projectslist = [];
    mainPage();
    const project_btn = document.querySelector('.create-project-btn');
    project_btn.addEventListener('click', function(){
        const name= window.prompt('Enter Name for the Project: ');
        projectslist.push(ProjectFactory(name));
        showProjects(projectslist);
    })

    const tempbtn = document.querySelector('.tempbtn');
    tempbtn.addEventListener('click', function(){
        console.log(projectslist);
    })


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