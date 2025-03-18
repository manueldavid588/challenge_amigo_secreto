// 1. Crear un array para almacenar los nombres
let friendsList = [];

// Esperar a que el DOM esté completamente cargado antes de asignar eventos
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById(".button-add");
    const drawButton = document.getElementById(".button-draw");

    addButton.addEventListener("click", agregarAmigo);
    drawButton.addEventListener("click", sortearAmigo);
});

// 2. Implementar una función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const name = input.value.trim();

    if (name === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    friendsList.push(name);
    input.value = ""; // Limpiar el campo de entrada
    updateFriendList(); // 3. Actualizar la lista de amigos
}

// 3. Actualizar la lista de amigos en la pantalla
function updateFriendList() {
    const listContainer = document.getElementById("listaAmigos");
    listContainer.innerHTML = ""; // Limpiar la lista antes de actualizar

    friendsList.forEach((friend) => {
        const li = document.createElement("li");
        li.textContent = friend;
        listContainer.appendChild(li);
    });
}

// 4. Implementar una función para sortear un amigo
function sortearAmigo() {
    if (friendsList.length === 0) {
        alert("La lista está vacía, agrega amigos antes de sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friendsList.length);
    const winner = friendsList[randomIndex];

    const resultContainer = document.getElementById("resultado");
    if (resultContainer) {
        resultContainer.innerHTML = `<li>🎉 Amigo secreto: ${winner} 🎉</li>`;
    }
}
