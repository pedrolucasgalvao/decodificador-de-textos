// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//código para o textarea não aceitar letras maiúsculas ou caracteres com acento
entrada__Texto.addEventListener('input', (e) => {
    const valor = e.target.value;
    const valorSemAcento = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const valorMinusculo = valorSemAcento.toLowerCase();
    e.target.value = valorMinusculo;
});

const styledia = document.getElementById("css-dia");
const stylenoite = document.getElementById("css-noite");

// habilita o modo diurno ao iniciar a página
function iniciarPagina() {
    stylenoite.disabled = true;
    styledia.disabled = false;

    document.querySelector(".cabecalho__icones__noite").classList.add("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__noite").classList.add("esconder");

    document.querySelector(".cabecalho__icones__dia").classList.remove("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__dia").classList.remove("esconder");
}

// Executa a função iniciarPagina() ao carregar a página
window.onload = iniciarPagina;


function btn__sol() {
    stylenoite.disabled = false;
    styledia.disabled = true;
    document.querySelector(".cabecalho__icones__dia").classList.add("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__dia").classList.add("esconder");

    document.querySelector(".cabecalho__icones__noite").classList.remove("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__noite").classList.remove("esconder");

    body.style.transition = 'background-color 1s ease-in-out'
}

document.getElementById(sol__btn).addEventListener("click", btn__sol);

function btn__lua() {
    stylenoite.disabled = true;
    styledia.disabled = false;
    document.querySelector(".cabecalho__icones__noite").classList.add("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__noite").classList.add("esconder");

    document.querySelector(".cabecalho__icones__dia").classList.remove("esconder");
    document.querySelector(".rodape__apresentacao__links__icones__dia").classList.remove("esconder");

    body.style.transition = 'background-color 0.5s ease-in-out'
}

document.getElementById(lua__btn).addEventListener("click", btn__lua);

function exibir__botao__copiar(){
    document.querySelector(".saida__Do__Texto__Botao__Copiar").classList.remove("esconder");
}

function descriptografar__Texto(){
    const entrada__Texto = document.getElementById ("entrada__Texto").value;
    if (entrada__Texto == "") {
        alert("Nenhum texto foi digitado!")
        return;
    }
    const texto__Descriptografado = entrada__Texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    document.getElementById ("saida__Texto").textContent = texto__Descriptografado;

    document.querySelector(".textos__E__Img__Informativos").classList.add("esconder");
    exibir__botao__copiar(); 
}

document.getElementById ("botao__Descriptografar").addEventListener ("click", descriptografar__Texto);

document.querySelector(".textos__E__Img__Informativos").classList.add("esconder");


function exibir__botao__copiar(){
    document.querySelector(".saida__Do__Texto__Botao__Copiar").classList.remove("esconder");
}

function copiar__texto() {
    var copy__text = document.getElementById("saida__Texto");
    navigator.clipboard.writeText(copy__text.value);
}

document.getElementById (botao__copiar).addEventListener ("click", copiar__texto);

const textarea = document.querySelector('textarea');

//funcao para criptografar o texto
function criptografar__Texto(){
    const entrada__Texto = document.getElementById ("entrada__Texto").value;
    if (entrada__Texto == "") {
        alert("Nenhum texto foi digitado!")
        return;
    }
    const texto__Criptografado = entrada__Texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    document.getElementById ("saida__Texto").textContent = texto__Criptografado;

    document.querySelector(".textos__E__Img__Informativos").classList.add("esconder");
    exibir__botao__copiar();
     
}

document.getElementById (botao__Criptografar).addEventListener ("click", criptografar__Texto);


//funcao para descriptografar o texto
function descriptografar__Texto(){
    const entrada__Texto = document.getElementById ("entrada__Texto").value;
    if (entrada__Texto == "") {
        alert("Nenhum texto foi digitado!")
        return;
    }
    const texto__Descriptografado = entrada__Texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    document.getElementById ("saida__Texto").textContent = texto__Descriptografado;

    document.querySelector(".textos__E__Img__Informativos").classList.add("esconder");
    exibir__botao__copiar(); 
}

document.getElementById ("botao__Descriptografar").addEventListener ("click", descriptografar__Texto);











