import './styles.css';
import mainPage from './mainPage';
import todoFactory from './todo';
import ProjectFactory from './projects';
import { showProjects, showTodos,shownewTodo,openTodoModal } from './DOMcontroller';
const servePage = (() =>{
    var projectslist = [];
    if (storageAvailable("localStorage")) {
        console.log('Local storage is available')
        console.log(localStorage);
      } else {
        console.log('Not available');
    }
    

    mainPage();
    const project_btn = document.querySelector('.create-project-btn');
    project_btn.addEventListener('click', function(){
        const name= window.prompt('Enter Name for the Project: ');
        if (name){
        projectslist.push(ProjectFactory(name));
        localStorage.setItem('projectslist', projectslist);
        }
        else{
            alert("Name cannot be Empty")            
        }
        projectscontroller();

    });
    function projectscontroller(){
        showProjects(projectslist);      
        const proj = document.querySelectorAll('.project');
        const delbtn = document.querySelectorAll('.delete-project-icon');

        proj.forEach(btn => {
            btn.addEventListener("click", projectClick); 
        });
        delbtn.forEach(element => {
            element.addEventListener('click', deleteProject)
        });
    }


    function projectClick(event){
        const prev_proj = document.querySelector('.active-project');                
                if(prev_proj){
                    prev_proj.classList.remove('active-project');
                    console.log('this also worked')
                }                                    
                this.classList.add('active-project');
                var target_id = event.target.id;
                if(event.target.className == 'delete-project-icon'){                    
                    target_id = this.id-1;                    
                    const prev_elem = document.getElementById(target_id);
                    prev_elem.classList.add('active-project');
                }
                showTodos(projectslist[target_id].getAllTodos(), projectslist[target_id].name);          
                TodoController(target_id);   
    }



    
    function deleteProject(event){
        const projectId = this.getAttribute("projectid");
        projectslist.splice(projectId, 1);     
        if(projectslist.length ==0){
            const container = document.querySelector('.content');
            container.innerHTML = ``;
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
        }
        else{
            projectscontroller();
        }
        
        
    }

    function TodoController(target_id){
        
        var delTodoIcon = document.querySelectorAll('.delete-todo-icon');
        delTodoIcon.forEach(el => {
            el.addEventListener('click', deleteTodo)
        });          
        const addbtn = document.querySelector('.add-new-todo-btn');
        addbtn.addEventListener('click', function(){
            openTodoModal();
            var title, desc, duedate, priority;
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.addEventListener('click', function(){
                title = document.getElementById('title').value;
                desc = document.getElementById('description').value;
                duedate = document.getElementById('duedate').value;
                priority = document.getElementById('priority').value;
                var newtodo = todoFactory(title, desc, duedate, priority);
                projectslist[target_id].addTodo(newtodo);
                shownewTodo(newtodo, projectslist[target_id].todosInd());   
                delTodoIcon = [];
                delTodoIcon = document.querySelectorAll('.delete-todo-icon')
                delTodoIcon.forEach(icon => {
                    icon.addEventListener('click', deleteTodo);
                });           
                const bd = document.querySelector('.backdrop');
                bd.remove();      
            })   
            });

    }




    function deleteTodo(){
        const proj = document.querySelector('.active-project');
        const activeProject = proj.id;
        const todoId = this.parentNode.getAttribute('todo-id');
        projectslist[activeProject].alltodos.splice(todoId, 1);        
        showTodos(projectslist[activeProject].getAllTodos(), projectslist[activeProject].name);          
        TodoController(activeProject)
    }



    function storageAvailable(type) {
        let storage;
        try {
          storage = window[type];
          const x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === "QuotaExceededError" ||
              // Firefox
              e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
          );
        }
      }
      



})();



