let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let senha = "";
    let maiuscula = form.letra_maiuscula;
    let minuscula = form.letra_minuscula;
    let numero = form.numero;
    let simbolo = form.simbolo;

    if (maiuscula.checked) {
        let letra = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        document.querySelector('#senha').value = letra; 
        letra = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        document.querySelector('#senha').value += letra; 
    }
})
