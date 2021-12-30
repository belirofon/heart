const wrapper = document.querySelector('.wrapper');
const heartWrapper = document.querySelector('.heart-wrapper');
const heart = document.querySelector('.heart');
const title = document.querySelector('.main-title');
const button = document.querySelector('.glow-button');
const imageArr = document.querySelectorAll('.love-image');
const footer = document.querySelector('.footer');
const audio = document.getElementsByTagName('audio');
const itemsWrapper = document.querySelector('.js-item');
const popup = document.querySelector('.popup');


for(let i = 0; i < imageArr.length; i++)
  imageArr[i].setAttribute('hidden', true);

const  toogleHidden = () => {
  for(let i = 0; i < imageArr.length; i++)
    imageArr[i].setAttribute('hidden', true);
  let rand = Math.floor(Math.random()*imageArr.length);
  imageArr[rand].removeAttribute('hidden');
}

const buttonHandleClicker = () => {
  document.addEventListener('click', (e) => {
    if (e.target === button) {
      footer.classList.add('hidden');
      imageArr.forEach((elem, index) => {
        heart.style.width = "600px";
        heart.style.height = "600px";
        toogleHidden()
      })
    }
  })
}





window.addEventListener( 'load', buttonHandleClicker() );