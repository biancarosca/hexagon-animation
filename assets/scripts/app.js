const body = document.querySelector('body');
const numberOfHexagonsPerRow = 10;
const HEX_WIDTH = Math.floor(window.innerWidth / numberOfHexagonsPerRow);
const numberOfHexagonsPerCol = Math.floor(window.innerHeight / HEX_WIDTH);
let randomColor = 0;

const createHexagon = (row) => {
  let hexContainer = document.createElement('div');
  hexContainer.classList.add('hex-container');
  let hexagon = document.createElement('div');
  hexagon.classList.add('hexagon');
  hexagon.style.width = `${HEX_WIDTH}px`;
  hexagon.style.height = `${HEX_WIDTH}px`; //height = width

  //move the hexagon to the right position
  if (row) {
    hexagon.style.position = 'relative';
    if (row % 2 === 0) {
    //   hexagon.style.right = `0`;
      hexagon.style.bottom = `${(row * HEX_WIDTH) / 4 - 4 * row}px`;
    } else {
      hexagon.style.right = `${HEX_WIDTH / 2}px`;
      hexagon.style.bottom = `${(row * HEX_WIDTH) / 4 - 4 * row}px`;
    }
  }
  hexContainer.append(hexagon);
  const line = document.querySelectorAll('.line-wrapper')[row];
  line.append(hexContainer);
};

for (let row = 0; row <=numberOfHexagonsPerCol+5; row++) {
  let line = document.createElement('div');
  line.classList.add('line-wrapper');
  body.append(line);
  for (let col = 1; col <= numberOfHexagonsPerRow +3; col++)
    createHexagon(row);
}

document.addEventListener('mouseover', (event) => {
    event.target.classList.add('hover');
})

// document.addEventListener('mouseover',(event) => {
//     // console.log(randomColor);
//     event.target.style.backgroundColor = `hsla(${randomColor}, 100%, 30%, 1)`;
//     setTimeout(()=> {
//         event.target.style.backgroundColor = `hsla(${randomColor}, 100%, 50%, 0.5)`;
//         console.log('here1');
//     },1000);
//     setTimeout(()=> {
//         event.target.style.backgroundColor = `hsla(${randomColor}, 100%, 65%, 0.3)`;
//     },1200);
//     setTimeout(()=> {
//         event.target.style.backgroundColor = `rgb(46, 44, 44)`;
//     },1400);
// });

// setTimeout(generateRandomColor,4000);

// const generateRandomColor = () => {
//     randomColor = Math.random()*360;
//     console.log('generated');
// }

    


const addAnimationEndListeners = () => {
    let hexagons = document.querySelectorAll('.hexagon');
    hexagons.forEach((hexagon) => {
        hexagon.addEventListener('animationend', () => {
            hexagon.classList.remove('hover');
        })
    })
}

addAnimationEndListeners();

