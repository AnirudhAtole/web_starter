
// get element by id

// console.log(document.getElementById('header-title'));

var header_title = document.getElementById('header-title');
var header = document.getElementById('main-header');

// header_title.textContent = 'hello'; 

// header_title.innerText = 'hello'; // pays attention to styling

// header_title.innerHTML = '<h3> Hello </h3>';

// header.style.borderBottom = 'solid 3px #000';

// var h2header = document.getElementsByTagName('h2');

// h2header[0].style.color = ' #00ff00 ';
// h2header[0].style.fontWeight = 'bold';

//get element byclass
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[2].style.backgroundColor = 'Green';

for(let i = 0 ; i < li.length ; i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.color = 'red';
}

var licl = document.getElementsByClassName('list-broup2-item');
licl[0].style.color = 'green';
licl[0].fontWeight = 'bold';