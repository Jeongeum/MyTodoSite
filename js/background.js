const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // body의 맨 뒤에 넣는다.

/* 
  appendChild : 맨 뒤에 추가
  prependChild : 맨 앞에 추가
  */
