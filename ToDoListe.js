function Printing() {
    let Input = document.getElementById("EingabeFeld");
    let Info = Input.value;
    
    let Liste = document.getElementById("Liste");
    Liste.insertAdjacentHTML('beforeend', `<li>${Info}</li>`);

    Input.value = "";
}