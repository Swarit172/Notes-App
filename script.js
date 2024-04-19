const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//when we close and open browser....it should check the local storage
//if there is any data...it should display data...as a note
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// store note on local storage..so that when we refresh...old notes should not disappear 
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//a new note will appear when we click on Create Notes
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//to delete the note when we click on remove icon
notesContainer.addEventListener("click", function(e){
    //when click on image...note deleted
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    //when write anything in p-tag...storage updated
    else if(e.target.tagName == "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// document.addEventListener("keydown", event =>{
//     if(event.key == "Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })








