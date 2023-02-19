var data = 0;
document.getElementById("outputs").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("output").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("output").innerText = data;
}
//creation of reset function
function reset() {
    data=0
    document.getElementById("output").innerText = data;
}