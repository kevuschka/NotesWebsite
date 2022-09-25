function getInput() {
    let title = document.getElementById('input-title');
    let notice = document.getElementById('input-notice');
    if (inputNotEmpty(title,notice)) {
        titles.unshift(title.innerText);    // I could use push as well
        notices.unshift(notice.innerText);
        setNote();
        render();
    }
}


function render() {
    sidebarColorToNotiz(); 
    minInput();            
    cleanContent();         
    getNote();              
    let content = document.getElementById('content');
    if (titles.length == 0) {
        content.innerHTML += emptyContentInfo();
    } else {
        for (let i = 0; i < titles.length; i++) {
            content.innerHTML += returnContent(i);  //more.js
        }
    }
}


function emptyContentInfo() {
    return `<p class="empty-content-info">Hey, noch keine Notizen hier..</p>`;
}


// ########## INPUT ##########

function maxInput() { // input field opens to bigger height (with two input fields)
    document.getElementById('input-content').classList.add('maximize-input');
    let inputContent = document.getElementById('input-content'); 
    inputContent.innerHTML = '';
    inputContent.innerHTML += returnMaxInput();
}


function minInput() { // input field closes to small heigth
    document.getElementById('input-content').classList.remove('maximize-input');
    let inputContent = document.getElementById('input-content'); 
    inputContent.innerHTML = '';
    inputContent.innerHTML += returnMinInput();
}


// #################### HTML (TEMPLATE) RETURN ##########

function returnContent(i) {
    return  `<div class="item-container flex" id="item-container">
                <span class="item-title">${titles[i]}</span>
                <span class="item-notice">${notices[i]}</span>
                <span class="button x-button" onclick="deleteItemToTrash(${i})">X</span>
            </div`;
}


function returnMaxInput() {
    return `<div id="input-opened-container" class="input-opened-container flex">
                <span class="input input-title" id="input-title" role="textbox" contenteditable></span>
                <span class="input input-notice" id="input-notice" role="textbox" contenteditable></span>
                <p class="button input-close-button" onclick="render()" title="Minimieren">-</p>
                <p class="button plus-button" onclick="getInput()" title="Hinzufügen">+</p>
            </div>`;
}


function returnMinInput() {
    return `<div id="input-closed-container" class="input-closed-container flex">
                <span onclick="maxInput()" class="input input-closed" role="textbox" contenteditable></span>
            </div>`;
}


// ########## SIDEBAR ##########

function sidebarColorToNotiz() {
    document.getElementById('note').classList.add('bg-color-yellow');
    document.getElementById('trash').classList.remove('bg-color-red');
}


// ########## EXTRA ##########

function inputNotEmpty(a,b) {                             // some text in (at least) one input field
    return ((a.innerText) || (b.innerText))
}


function cleanContent() {
    document.getElementById('content').innerHTML = '';                  // the hole content area where all notes are shown
}


function cleanInput() {
    document.getElementById('input-title').innerHTML = '';              // the input fields "Titel" and "Notiz schreiben..."
    document.getElementById('input-notice').innerHTML = '';
}