let open = document.getElementById('BTC');
let ventana = document.querySelector('.ventana');
let close = document.getElementById('close');


open.addEventListener('click', (e) => {
    e.preventDefault();
    ventana.classList.add('show');  
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    ventana.classList.remove('show');
});


let open2 = document.getElementById('Ethereum');
let ventana2 = document.querySelector('.ventana2');
let close2 = document.getElementById('close2');


open2.addEventListener('click', (e) => {
    e.preventDefault();
    ventana2.classList.add('show');  
});

close2.addEventListener('click', (e) => {
    e.preventDefault();
    ventana2.classList.remove('show');
});

let open3 = document.getElementById('USDT');
let ventana3 = document.querySelector('.ventana3');
let close3 = document.getElementById('close3');


open3.addEventListener('click', (e) => {
    e.preventDefault();
    ventana3.classList.add('show');  
});

close3.addEventListener('click', (e) => {
    e.preventDefault();
    ventana3.classList.remove('show');
});

let open4 = document.getElementById('BNB');
let ventana4 = document.querySelector('.ventana4');
let close4 = document.getElementById('close4');


open4.addEventListener('click', (e) => {
    e.preventDefault();
    ventana4.classList.add('show');  
});

close4.addEventListener('click', (e) => {
    e.preventDefault();
    ventana4.classList.remove('show');
});