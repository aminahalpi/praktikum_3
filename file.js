const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("newTask");

// Menambahkan event listener untuk tombol "Add"
addButton.addEventListener("click", addTask);

// Fungsi untuk menambahkan tugas
function addTask() {
  const taskInputValue = taskInput.value.trim();

  if (taskInputValue === "") {
    alert("Please enter a task.");
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td class="task-text">${taskInputValue}</td>
      <td class="task-buttons">
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="close" onclick="deleteTask(this)">Delete</button>
      </td>
    `;

  taskList.appendChild(tr);
  taskInput.value = ""; // Mengosongkan input setelah menambahkan tugas
}

// Fungsi untuk menghapus tugas
function deleteTask(element) {
  const tr = element.parentElement.parentElement;
  tr.remove();
}

// Fungsi untuk mengedit tugas
function editTask(element) {
  const taskTd =
    element.parentElement.parentElement.querySelector(".task-text");
  const newTask = prompt("Edit your task:", taskTd.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    taskTd.textContent = newTask;
  }
}

// Mengubah warna latar belakang

document
  .getElementById("background-color")
  .addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
  });

// Mengubah ukuran font
document.getElementById("font-size").addEventListener("input", function () {
  document.body.style.fontSize = this.value + "px";
});

// Mengaktifkan atau menonaktifkan mode gelap
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

// Mengubah gaya font
document.getElementById("font-style").addEventListener("change", function () {
  document.body.style.fontFamily = this.value;
});