const div = document.querySelector('.gallery');
const img = div.querySelectorAll('img');
const toggle = document.querySelector('.gallery img');
const btn = document.querySelector('.btn');

const zoomPhotos = () => {
    div.style.width = '100%';
};

toggle.addEventListener('click', zoomPhotos);

const clickBtn = () => {
    zoomPhotos();
};

btn.addEventListener('click', clickBtn);

