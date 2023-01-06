
// get element by id

// console.log(document.getElementById('header-title'));

// var header_title = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// header_title.textContent = 'hello'; 

// header_title.innerText = 'hello'; // pays attention to styling

// header_title.innerHTML = '<h3> Hello </h3>';

// header.style.borderBottom = 'solid 3px #000';

// var h2header = document.getElementsByTagName('h2');

// // h2header[0].style.color = ' #00ff00 ';
// // h2header[0].style.fontWeight = 'bold';

// //get element byclass
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[2].style.backgroundColor = 'Green';

// for(let i = 0 ; i < li.length ; i++)
// {
//     li[i].style.fontWeight = 'bold';
//     li[i].style.color = 'red';
// }

// var licl = document.getElementsByClassName('list-broup2-item');
// licl[0].style.color = 'green';
// licl[0].fontWeight = 'bold';

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var last_item = document.querySelector('.list-group-item:last-child');
// last_item.style.color = 'blue';

// var second_item = document.querySelector('.list-group-item:nth-child(2)');
// second_item.style.backgroundColor = 'green';

// var third_item = document.querySelector('.list-group-item:nth-child(3)');
// third_item.style.visibility = 'hidden';

// var items = document.querySelectorAll('.list-group-item');
// console.log(items);

// items[1].style.color = 'green';

// var odd_items = document.querySelectorAll('li:nth-child(odd)');

// for(let i = 0 ; i < odd_items.length ; i++)
// {
//     odd_items[i].style.backgroundColor = 'green';
// }

//Traversing the DOM//

var  itemlist = document.querySelector('#items');

//parentNode 
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement);

//childNode
// console.log(itemlist.childNodes);

console.log(itemlist.children);
itemlist.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemlist.firstChild);

//firstElementChild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'jello';

//lastChild
console.log(itemlist.lastChild);

//lastElementChild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'jello 4';

//nextsibling
console.log(itemlist.nextSibling);

//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previosElementSibling
console.log(itemlist.previousElementSibling);

//create a div
var newDiv = document.createElement('div');
console.log(newDiv);

var newDivText = document.createTextNode('HEllo word');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

newDiv.style.fontSize = '30px';

var ul = document.getElementById('items');
var lielement = "<li class = 'list-group-item'> Hello world </li>";
ul.innerHTML = lielement + ul.innerHTML;
