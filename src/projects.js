export default function ProjectFactory(name){
    var alltodos = [];
    alltodos.push(name);
    const getAllTodos = () => alltodos;
    const addTodo = (todo) => alltodos.push(todo);
    return {name, alltodos, getAllTodos, addTodo};
}

