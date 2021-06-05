const popUpButton = document.querySelector(".pop-up-btn button");

const popupbox  = document.querySelector(".popup");


function clickevent(){
    console.log('ehjbuew');

   
    popupbox.classList.toggle("active");
    console.log(popupbox);



}


popUpButton.addEventListener("click",clickevent);


