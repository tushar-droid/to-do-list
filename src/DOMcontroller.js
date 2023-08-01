function showProjects(projects){
    const container = document.querySelector('.project-container');
    container.innerHTML  = '';
    projects.forEach((project,id) => {        
        const block = document.createElement('div');
        block.setAttribute('id', id);
        block.textContent = project.name;
        container.appendChild(block)
        console.log(project)
    });
}

export{showProjects}