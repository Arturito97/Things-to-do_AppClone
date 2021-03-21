let todoListItems = [];

const todoForm = document.getElementById('form');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const todoInput = document.getElementById('todo_input')
    
    const errorMessageElement = document.getElementById('error-msg');

    if(todoInput.value){

        addTodoItem(todoInput.value);

        todoInput.value="";

        errorMessageElement.style.display="none";
    } else {
        errorMessageElement.innerHTML = "Submission can't be empty!";
        errorMessageElement.style.display = 'block';
    }
})

function addTodoItem(userInput){

    const todoItem = {
        id: Date.now(),
        value: userInput
    }

    todoListItems.push(todoItem);
    
    displayTodoItem(todoItem);
}

function displayTodoItem(newTodoItem){
    const todoList = document.getElementById('todo-list');

    const listItemElement = document.createElement('li');

    listItemElement.innerHTML =`
        <div class="todo_item">
            <span>${newTodoItem.value}</span>
            <button id="delete-todo">Delete</button>
        </div>
        `;

    todoList.append(listItemElement);

    todoList.style.display = 'block';

}