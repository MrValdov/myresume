const wede_1 = document.getElementById("wede_1")
const wede_2 = document.getElementById("wede_2")
const wede_3 = document.getElementById("wede_3")
const textElement = document.getElementById('animatedText');
let hue = 0;

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});
document.addEventListener('mousedown', dragging => {
    dragging.preventDefault();
});
function showWede_1(){
    sleep(100);
    wede_1.style.display = "block";
}
function hideWede_1(){
    sleep(100);
    wede_1.style.display = "none";
}
function showWede_2(){
    sleep(100);
    wede_2.style.display = "block";
}
function hideWede_2(){
    sleep(100);
    wede_2.style.display = "none";
}
function showWede_3(){
    sleep(100);
    wede_3.style.display = "block";
}
function hideWede_3(){
    sleep(100);
    wede_3.style.display = "none";
}
function animateTextColor() {
    hue = (hue + 1) % 720;
    textElement.style.color = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(animateTextColor);
}
animateTextColor();
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }