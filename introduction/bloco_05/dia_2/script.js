//Exercise 1

const newTitle = document.createElement('h1');
newTitle.innerHTML = 'Exercicio 5.2 - Javascript DOM';
document.body.appendChild(newTitle);

//Exercise 2

const newDiv = document.createElement('div');
newDiv.className = 'main-content';
document.body.appendChild(newDiv);

//Exercise 3

const div2 = document.createElement('div');
div2.className = 'center-content';
newDiv.appendChild(div2);

//Exercise 4 

const text = document.createElement('p');
text.innerHTML = 'Olá Mundo!';
div2.appendChild(text);

//Exercise 5

const divLeft = document.createElement('div');
divLeft.className = 'left-content';
newDiv.appendChild(divLeft);

//Exercise 6

const divRight = document.createElement('div');
divRight.className = 'right-content';
newDiv.appendChild(divRight);

//Exercise 7

const newImage = document.createElement('img');
newImage.className = 'small-image';
newImage.src = 'https://picsum.photos/200';
divLeft.appendChild(newImage);

//Exercise 8
const createUl = document.createElement('ul');
divRight.appendChild(createUl);

listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let num in listNumbers) {
  const liElement = document.createElement('li');
  liElement.innerHTML = listNumbers[num];
  createUl.appendChild(liElement);
}

//Exercise 9

for (let index = 1; index <= 3; index += 1) {
  const h3Create = document.createElement('h3');
  h3Create.innerHTML = 'Show ' + index;
  newDiv.appendChild(h3Create);
}


//Exercise 1 part II

newTitle.className = 'title';

//Exercise 2 parte II

const elementsH3 = document.getElementsByTagName('h3');
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = 'description';
}

//Exercise 3 part II

const divLeftContent = document.getElementsByClassName('left-content')[0];
     newDiv.removeChild(divLeftContent);

//Exercise 4 part II

const divRightContent = document.getElementsByClassName('right-content')[0];
      divRightContent.style.marginRight='auto';
// Exercise 5 part II

const divCenterContent = document.getElementsByClassName('center-content')[0];
    divCenterContent.parentNode.style.backgroundColor = 'green';

// Exercise 6 part II

createUl.lastChild.remove();
createUl.lastChild.remove();