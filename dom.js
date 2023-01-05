
// get element by id

// console.log(document.getElementById('header-title'));

var header_title = document.getElementById('header-title');
var header = document.getElementById('main-header');

// header_title.textContent = 'hello'; 

// header_title.innerText = 'hello'; // pays attention to styling

// header_title.innerHTML = '<h3> Hello </h3>';

header.style.borderBottom = 'solid 3px #000';

var h2header = document.getElementsByTagName('h2');

h2header[0].style.color = ' #00ff00 ';
h2header[0].style.fontWeight = 'bold';

//get element byclass
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[2].style.backgroundColor = 'Green';

for(let i = 0 ; i < items.length ; i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}