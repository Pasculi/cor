let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let songs = songsContainer.querySelectorAll(".song");
let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");
let image = container.querySelector(".cover__image");

if (songs.length === 0){
    resetButton.setAttribute("disabled",true);
    resetButton.style.backgroundColor = "#f1f1f1";
    resetButton.style.cursor = ("pointer, none");
}
else{
    resetButton.setAttribute("disabled",false);
}
console.log(songs.length);

console.log(songsContainer.className)