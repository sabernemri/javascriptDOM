function getRandomColor() {
    var letters = '3456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 12)];
    }
    return color;
  }
document.addEventListener("DOMContentLoaded",()=>{

    const col = document.getElementById("color-box");
    const but = document.getElementById("change-color-btn");

    but.addEventListener("click", () => {

let a= getRandomColor();
        col.style.backgroundColor = a;
    });



})
