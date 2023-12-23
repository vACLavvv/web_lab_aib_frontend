const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const generateButton = document.getElementById('generateButton');
const colorArea = document.getElementById('colorArea');
const colorSquare = document.getElementById('colorSquare');
const prevColorButton = document.getElementById('prevColor');
const nextColorButton = document.getElementById('nextColor');
const resultBox = document.getElementById('colorResult');
let colors = [];
let currentIndex = 0;

generateButton.addEventListener('click', generateColorBlock);
colorArea.addEventListener('click', changeBackgroundColor);
prevColorButton.addEventListener('click', scrollColors);
nextColorButton.addEventListener('click', scrollColors);

function generateColorBlock() {
    const red = redInput.value || 0;
    const green = greenInput.value || 0;
    const blue = blueInput.value || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;

        const colorBlock = document.createElement('div');
        colorBlock.style.backgroundColor = rgbColor;
        colorBlock.className = 'color-block';
        colorBlock.style.border = '2px solid black';

        colors.push(rgbColor);
        currentIndex = colors.length - 1;

        colorArea.appendChild(colorBlock);
        updateScrollButtons();
    } else {
        alert('Неверное значение цвета');
    }
}

function changeBackgroundColor(event) {
    const target = event.target;

    if (target.classList.contains('color-block')) {
        currentIndex = colors.indexOf(target.style.backgroundColor);
        updateColorDisplay();
    }
}

function updateScrollButtons() {
    if (colors.length <= 1) {
        prevColorButton.classList.add('hidden');
        nextColorButton.classList.add('hidden');
    } else if (currentIndex === 0) {
        prevColorButton.classList.add('hidden');
        nextColorButton.classList.remove('hidden');
    } else if (currentIndex === colors.length - 1) {
        prevColorButton.classList.remove('hidden');
        nextColorButton.classList.add('hidden');
    } else {
        prevColorButton.classList.remove('hidden');
        nextColorButton.classList.remove('hidden');
    }
}

function scrollColors(event) {
    if (event.target.id === 'prevColor') {
        if (currentIndex > 0) {
            currentIndex--;
            updateColorDisplay();
        }
    } else if (event.target.id === 'nextColor') {
        if (currentIndex < colors.length - 1) {
            currentIndex++;
            updateColorDisplay();
        }
    }
}

function updateColorDisplay() {
    colorSquare.style.backgroundColor = colors[currentIndex];
    document.body.style.backgroundColor = colors[currentIndex];
    resultBox.textContent = `Выбранный цвет: ${colors[currentIndex]}`;
    updateScrollButtons();
}
