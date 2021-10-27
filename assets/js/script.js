
var startBtnEl = document.querySelector("#start-btn");

var startBtnHandler = function (event) {
    event.preventDefault();

    //delete start quiz container

    // start timer for quiz

    // view score link button

    // show first question
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML =
        "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    //question options

    //feedback

}

startBtnEl.addEventListener("submit", startBtnHandler);