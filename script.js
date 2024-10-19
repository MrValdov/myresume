const wede_1 = document.getElementById("wede_1");
const wede_2 = document.getElementById("wede_2");
const wede_3 = document.getElementById("wede_3");
const wede_4 = document.getElementById("wede_4");
const hid_list = document.getElementById("hid_list");
const see_list = document.getElementById("see_list");
const textElement = document.getElementById('animatedText');
let hue = 0;

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});
document.addEventListener('mousedown', dragging => {
    dragging.preventDefault();
});
function experience(){
    var currentTime = new Date()
    var total_years = currentTime.getFullYear() - 2009;
    var semi_years = currentTime.getFullYear() - 2019;
    document.getElementById("total_years").innerHTML = total_years;
    document.getElementById("semi_years").innerHTML = semi_years;
}
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
function showWede_4(){
    sleep(100);
    wede_4.style.display = "block";
    hid_list.style.display = "none";
    see_list.style.display = "block";
}
function hideWede_4(){
    sleep(100);
    wede_4.style.display = "none";
}
function show_list(){
    hid_list.style.display = "block";
    see_list.style.display = "none";
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