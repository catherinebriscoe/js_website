const image = document.querySelector('#market');
let market = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pasta_Venice.jpg"; alt="Italian market";
let pasta = "https://upload.wikimedia.org/wikipedia/commons/5/59/Spaghetti_vongole_2.jpg";

image.onmouseenter = (e) => {

   e.target.setAttribute('src', pasta);
};

image.onmouseleave = (e) => {

   e.target.setAttribute('src', market);
};


const clicker = document.querySelector('button');
const myImage = document.querySelector('#galleria');

myImage.style.display = 'none';
clicker.onclick = showAndHide;

function showAndHide() {
  if (myImage.classList.contains('showing')) {
    myImage.style.display = 'none';
    myImage.classList.remove('showing');
  } else {
    myImage.style.display = 'block';
    myImage.classList.add('showing');
  }
}
