//Task List Container
const taskContainer = document.getElementById('task-container');

//Function to add task
function addTask() {

    const userInput = document.getElementById('user-task');
    const userTask = userInput.value;

    //Add task if input field is not empty
    if (userTask != '') {
        const tr = document.createElement('tr');

        const tdOne = document.createElement('td');
        tdOne.innerHTML = `<td class="text-center">${userTask}</td>`;


        const tdTwo = document.createElement('td');
        tdTwo.classList.add("text-end");



        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add("btn-delete", "me-2", "text-danger", "fs-3");
        const finishBtn = document.createElement('span');
        finishBtn.innerHTML = '<i class="fas fa-check"></i>';
        finishBtn.classList.add("btn-done", "text-success", "fs-3");



        tdTwo.appendChild(deleteBtn);
        tdTwo.appendChild(finishBtn);


        tr.appendChild(tdOne);
        tr.appendChild(tdTwo);



        taskContainer.appendChild(tr);

    }
    userInput.value = '';


    //Delete and Done button functions

    const deleteButton = document.getElementsByClassName('btn-delete');
    const finishedButton = document.getElementsByClassName('btn-done');

    for (btn of deleteButton) {
        btn.addEventListener('click', function (event) {
            taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
        })
    }

    for (btn of finishedButton) {
        btn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.innerHTML = `
        <button type="submit"
        class="btn btn-primary">Completed</i></button>`;
        })
    }
}



