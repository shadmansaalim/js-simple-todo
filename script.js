function addTask() {

    const taskContainer = document.getElementById('task-container');
    const userInput = document.getElementById('user-task');
    const userTask = userInput.value;

    if (userTask != '') {
        const tr = document.createElement('tr');

        const th = document.createElement('th');
        th.innerHTML = `<th scope="row">${userTask}</th>`;


        const tdOne = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `Delete <i
        class="fas fa-trash"></i>`;
        deleteBtn.classList.add("btn", "btn-danger");
        const finishBtn = document.createElement('button');
        finishBtn.innerText = 'Finished';
        finishBtn.classList.add("btn", "btn-success", "ms-md-2", "mt-2", "mt-md-0");

        tdOne.appendChild(deleteBtn);
        tdOne.appendChild(finishBtn);


        tr.appendChild(th);
        tr.appendChild(tdOne);


        taskContainer.appendChild(tr);

    }
    userInput.value = '';
    buttonOperation();
}

function buttonOperation() {
    const taskContainer = document.getElementById('task-container');
    const deleteButton = document.getElementsByClassName('btn-danger');
    const finishedButton = document.getElementsByClassName('btn-success');

    for (btn of deleteButton) {
        btn.addEventListener('click', function (event) {
            taskContainer.removeChild(event.target.parentNode.parentNode);
        })
    }


    for (btn of finishedButton) {
        btn.addEventListener('click', function (event) {
            event.target.parentNode.innerHTML = `
        <button type="submit"
        class="btn btn-primary ms-md-1 mt-2 mt-md-0">Completed <i class="fas fa-check-circle"></i></button>`;

        })
    }
}
buttonOperation();