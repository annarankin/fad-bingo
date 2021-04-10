import image1 from "url:./img/bingo-1.png?as=webp&width=250";
import image2 from "url:./img/bingo-2.png?as=webp&width=250";
import image3 from "url:./img/bingo-3.png?as=webp&width=250";
import image4 from "url:./img/bingo-4.png?as=webp&width=250";
import image5 from "url:./img/bingo-5.png?as=webp&width=250";
import image6 from "url:./img/bingo-6.png?as=webp&width=250";
import image7 from "url:./img/bingo-7.png?as=webp&width=250";
import image8 from "url:./img/bingo-8.png?as=webp&width=250";
import image9 from "url:./img/bingo-9.png?as=webp&width=250";
import image10 from "url:./img/bingo-10.png?as=webp&width=250";
import image11 from "url:./img/bingo-11.png?as=webp&width=250";
import image12 from "url:./img/bingo-12.png?as=webp&width=250";
import freeSpace from "url:./img/bingo-13.png?as=webp&width=250";
import image14 from "url:./img/bingo-14.png?as=webp&width=250";
import image15 from "url:./img/bingo-15.png?as=webp&width=250";
import image16 from "url:./img/bingo-16.png?as=webp&width=250";
import image17 from "url:./img/bingo-17.png?as=webp&width=250";
import image18 from "url:./img/bingo-18.png?as=webp&width=250";
import image19 from "url:./img/bingo-19.png?as=webp&width=250";
import image20 from "url:./img/bingo-20.png?as=webp&width=250";
import image21 from "url:./img/bingo-21.png?as=webp&width=250";
import image22 from "url:./img/bingo-22.png?as=webp&width=250";
import image23 from "url:./img/bingo-23.png?as=webp&width=250";
import image24 from "url:./img/bingo-24.png?as=webp&width=250";
import image25 from "url:./img/bingo-25.png?as=webp&width=250";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
];

function shuffledImages() {
  const shuffled = [];
  const imageClone = [...images]
  while (imageClone.length > 0) {
    const index = Math.floor(Math.random() * imageClone.length);
    const selected = imageClone.splice(index, 1);
    shuffled.push(selected);
  }
  shuffled.splice(12, 0, freeSpace);
  return shuffled
}

function fillInCard(card) {
  const shuffled = shuffledImages(images)

  Array.from({ length: 25 }).forEach((_, i) => {
    const square = document.createElement("img");
    square.src = shuffled[i];
    square.addEventListener('click', () => {
      square.classList.toggle('selected')
    })
    card.appendChild(square);
  });
}

window.onload = () => {
  const bingoCard = document.getElementById("bingo-card");
  const scrambleButton = document.getElementById("scramble");

  fillInCard(bingoCard)
  scrambleButton.addEventListener('click', (event) => {
    event.preventDefault()
    bingoCard.innerHTML = ''
    fillInCard(bingoCard)
  })
};
