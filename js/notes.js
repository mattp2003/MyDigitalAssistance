document.addEventListener("DOMContentLoaded", loadNotesFromLocalStorage);

function addStickyNote(content = "") {
    const notesContainer = document.getElementById("notes-container");

    const stickyNote = document.createElement("div");
    stickyNote.classList.add("sticky-note");

    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.oninput = saveNotesToLocalStorage;
    stickyNote.appendChild(textArea);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
        notesContainer.removeChild(stickyNote);
        saveNotesToLocalStorage();
    };
    stickyNote.appendChild(deleteButton);

    notesContainer.appendChild(stickyNote);
}

function saveNotesToLocalStorage() {
    const notes = [];
    const textAreas = document.querySelectorAll(".sticky-note textarea");
    textAreas.forEach((textarea) => {
        notes.push(textarea.value);
    });

    localStorage.setItem("stickyNotes", JSON.stringify(notes));
}

function loadNotesFromLocalStorage() {
    const notes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
    notes.forEach((note) => addStickyNote(note));
}