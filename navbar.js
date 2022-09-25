function renderNavbar() {
    document.getElementById('side-bar').innerHTML += 
        `<img class="logo" src="img/note64.png">
        <a href="index.html" id="note" onclick="render()">Notiz</a>
        <a href="trash.html" id="trash" onclick="renderTrash()">Papierkorb</a>`;
}