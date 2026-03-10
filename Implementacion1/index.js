document.getElementById('text').addEventListener('submit' , function(event){
    event.preventDefault();

    const miTexto = document.getElementById('texto').value;

    alert(miTexto);
})