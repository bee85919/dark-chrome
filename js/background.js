const body = document.querySelector("body");

function rndImg(rndNum) {
    const image = new Image();
    image.src = `img/${rndNum}.jpg`;
    image.classList.add("background-image");
    body.appendChild(image);
}

const IMG_NUM = 3;

function bgImg() {
    rndImg(Math.floor(Math.random() * IMG_NUM));
}

bgImg();