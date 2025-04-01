document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const emptyState = document.getElementById('empty-state');

    // todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    //save todo
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
        updateEmptyState();
    }
    
    function updateEmptyState() {
        if (todos.length === 0) {
            emptyState.classList.add('visible');
        } else {
            emptyState.classList.remove('visible');
        }
    }

    function createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="complete-btn">
                    <i class="fas fa-check"></i>
                </button>
                <button class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        //buttons event
        const deleteBtn = li.querySelector('.delete-btn');
        const completeBtn = li.querySelector('.complete-btn');

        deleteBtn.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            li.remove();
            saveTodos();
        });

        completeBtn.addEventListener('click', () => {
            todo.completed = !todo.completed;
            li.classList.toggle('completed');
            saveTodos();
        });

        return li;
    }

    function addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(todo);
        todoList.appendChild(createTodoElement(todo));
        saveTodos();
    }

    // todoform submit
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        
        if (text) {
            addTodo(text);
            todoInput.value = '';
        }
    });

    // todos in local storaeg
    todos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
    updateEmptyState();
});