   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeTextByTag(text) {
  document.getElementsByTagName('p')[0].innerText = text;
}
changeTextByTag('lorem ipsum bla bla bla');

function changeColorByClass(className, color) {
  document.getElementsByClassName(className)[0].style.background = color;
}

changeColorByClass('main-content', 'rgb(76,164,109)');

changeColorByClass('center-content', 'white');

function changeTitleByClass(className, text) {
  document.getElementsByClassName(className)[0].innerHTML = text;
}

changeTitleByClass('title', 'Exercicio 5.1 - Javascript');

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}

paragraphUpperCase();

function showParagraph() {
 let paragraph = document.getElementsByTagName('p');
 for (let index = 0; index < paragraph.length; index += 1) {
  console.log(paragraph[index].innerHTML);
 }
}

showParagraph();
