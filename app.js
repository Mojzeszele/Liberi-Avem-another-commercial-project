const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const selectedIndex = null;

imageIndexes.forEach( i => {
    const image = document.createElement('img');
    image.src = `assets/photo${i}.jpg`;
    image.alt = `photo${i} `
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `assets/photo${i}.jpg`
        selectedImage.alt = `photo${i} `
    })

    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation')

const handleClick = () => {
    hamburger.classList.toggle('hamburgerActive');
    nav.classList.toggle('navigationActive');
}

hamburger.addEventListener('click', handleClick)