const btn = document.getElementById('tasks__add');
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');
const removes = Array.from(document.querySelectorAll('.task__remove'));

btn.addEventListener('click', () => {
    const input = document.getElementById('task__input');
    const value = input.value.trim();

    if (value !== '') {
        const task  = `<div class="task"><div class="task__title">${value}</div><a href="#" class="task__remove">&times;</a></div>`;
        taskList.insertAdjacentHTML('beforeEnd', task);
    
    }
});

document.getElementById('tasks__list').addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();

        const task = event.target.closest('.task');
        task.remove();
    }
});