
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

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var last_item = document.querySelector('.list-group-item:last-child');
last_item.style.color = 'blue';

var second_item = document.querySelector('.list-group-item:nth-child(2)');
second_item.style.backgroundColor = 'green';

var third_item = document.querySelector('.list-group-item:nth-child(3)');
third_item.style.visibility = 'hidden';

var items = document.querySelectorAll('.list-group-item');
console.log(items);

items[1].style.color = 'green';

var odd_items = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0 ; i < odd_items.length ; i++)
{
    odd_items[i].style.backgroundColor = 'green';
}