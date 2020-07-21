// document.body.style.backgroundColor = "tomato";
// var authors = document.querySelectorAll('.special h3');
// for (var i = 0; i < authors.length; i++) {
//     var element = authors[i];

//     console.log(element.innerHTML);
//     element.innerHTML = 'lekhok-' + (i + 1);
//     element.style.background = 'lightblue';
//     // element.style.margin = '10px';


// }
// // console.log(authors);

//******* INSERt NEW THInG IN A HTML USING JAVASCRIPT****** */    

const article = document.getElementById('first-article');
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is added by Javascript';
article.appendChild(newParagraph);

//add one more gift fot my honey bonney

const ul = document.getElementById('gift-list');
const li = document.createElement('li');
li.innerHTML = 'Brand new Gift';
ul.appendChild(li);