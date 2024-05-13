function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    let taskList = document.getElementById("taskList");
    let taskCount = taskList.getElementsByTagName("li").length;

    if (taskCount >= 7) {
        alert("Pehle itna kaam to khatam kar!");
        return; 
    }

    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&times;"; 
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove(); 
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}