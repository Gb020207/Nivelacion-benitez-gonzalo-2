document.getElementById('text').addEventListener('submit' , function(){
  
    const miTexto = document.getElementById('texto').value;

    alert(miTexto);
})

let state = 0;
function ChangeColor(){
 const box = document.getElementById('texto')

 if(state === 0){
    box.style.backgroundColor = "white";
    box.style.color = "black";
 } else if(state === 1){
    box.style.backgroundColor = "black";
    box.style.color = "white";

 } else if(state === 2) {
    box.style.backgroundColor = "lightblue";
    box.style.color = "red"
 }
 state = (state + 1) % 3;
}