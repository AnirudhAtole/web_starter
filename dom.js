
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