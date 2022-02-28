const images = ["배경1.jpg", "배경2.jpg", "배경3.jpg", "배경4.jpg", "배경5.jpg",
"배경6.jpg", "배경7.jpg", "배경8.jpg", "배경9.jpg", "배경10.jpg"];

const chooseImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chooseImg}`;



document.body.appendChild(bgImg);