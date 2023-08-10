export default function ProjectFactory(name){
    var alltodos = [];
    const getAllTodos = () => alltodos;
    const addTodo = (todo) => alltodos.push(todo);
    const todosInd = () => alltodos.length-1;
    return {name, alltodos, getAllTodos, addTodo, todosInd};
}

