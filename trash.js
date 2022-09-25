function renderTrash() {
    trashHead();           
    cleanContent();
    getTrash();
    let content = document.getElementById('content');
    if (trashTitles.length == 0) {
        content.innerHTML += emptyTrashInfo();
    } else {   
        for (let i = 0; i < trashTitles.length; i++) {
            content.innerHTML += returnTrash(i);
            }
    }
}


function trashHead(){
    sidebarColorToTrash();
    let inputContent = document.getElementById('input-content'); 
    inputContent.innerHTML = '';
    inputContent.innerHTML += returnTrashHead();
}


function deleteItemForEver(i) {                                      //deleting a note
    trashTitles.splice(i,1);
    trashNotices.splice(i,1);
    setTrash();
    renderTrash();
}


function restoreItem(i) {
    titles.unshift(trashTitles[i]);
    notices.unshift(trashNotices[i]);
    trashTitles.splice(i,1);
    trashNotices.splice(i,1);
    setTrash();
    setNote();
    renderTrash();
}


function emptyTrashInfo() {
    return `<p class="empty-trash-info">Oops, dein Papierkorb ist leer..</p>`;
}


function returnTrash(i) {
    return `<div class="item-container flex" id="item-container">
                <span class="item-title">${trashTitles[i]}</span>
                <span class="item-notice">${trashNotices[i]}</span>
                <span class="button restore-button" id="restore-button" onclick="restoreItem(${i})" title="Wiederherstellen">O</span>
                <span class="button x-button x-button-trash" onclick="deleteItemForEver(${i})" title="Löschen">X</span>
            </div>`;
}


function returnTrashHead() {
    return `<div id="input-closed-container" class="input-closed-container flex input-trash"> 
                <p class="input-trash-headline">Papierkorb</p>
            </div>`;
}


// ########## SIDEBAR ##########
function sidebarColorToTrash() {
    document.getElementById('trash').classList.add('bg-color-red');
    document.getElementById('note').classList.remove('bg-color-yellow');
}


function cleanContent() {
    document.getElementById('content').innerHTML = '';                  // the hole content area where all notes are shown
}