// set them ones globally to use them in every function
let titles = [];
let notices = [];
let trashTitles = [];
let trashNotices = [];


function init() {
    renderNavbar();
    getNote(); 
    getTrash();     
    // if there are no saves in localStorage, we get "null" when executing getNote()/getTrash()
    // for that we need to assign [] to "titles" and "notices" again   
    setOnloadNotes();
    setOnloadTrash();      
    render();        
}


function initTrash() {
    renderNavbar();
    getNote(); 
    getTrash();
    // if there are no saves in localStorage, we get "null" when executing getNote()/getTrash()
    // for that we need to assign [] to "titles" and "notices" again:
    setOnloadNotes();
    setOnloadTrash(); 
    renderTrash();
}


function deleteItemToTrash(i) {             //deleting a note
    trashTitles.unshift(titles[i]);
    trashNotices.unshift(notices[i]);
    titles.splice(i,1);
    notices.splice(i,1);
    setNote();   
    setTrash();
    render();    
}


function getNote() {
    let titlesAsText = localStorage.getItem('titles');
    let noticesAsText = localStorage.getItem('notices');
    titles = JSON.parse(titlesAsText);
    notices = JSON.parse(noticesAsText);
}


function setNote() {
    let titlesAsText = JSON.stringify(titles);
    let noticesAsText = JSON.stringify(notices);
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notices', noticesAsText);
}

// if there are no saves in localStorage, we get "null" when executing getNote()/getTrash()
// for that we need to assign [] to "titles" and "notices" again
function setOnloadNotes() {
    if ( !(titles || notices) ) {
        titles = [];
        notices = [];
        setNote();    
    }
}


function getTrash() {
    let trashTitlesAsText = localStorage.getItem('trashTitles');
    let trashNoticesAsText = localStorage.getItem('trashNotices');
    trashTitles = JSON.parse(trashTitlesAsText);
    trashNotices = JSON.parse(trashNoticesAsText);
}


function setTrash() {
    let trashTitlesAsText = JSON.stringify(trashTitles);
    let trashNoticesAsText = JSON.stringify(trashNotices);
    localStorage.setItem('trashTitles', trashTitlesAsText);
    localStorage.setItem('trashNotices', trashNoticesAsText);
}


// if there are no saves in localStorage, we get "null" when executing getNote()/getTrash()
// for that we need to assign [] to "titles" and "notices" again
function setOnloadTrash() {
    if( !(trashTitles || trashNotices) ) {
        trashTitles = [];
        trashNotices = [];
        setTrash();   //trash.js/31
    }
}




