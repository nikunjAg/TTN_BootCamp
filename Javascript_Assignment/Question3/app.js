const inputRadiusEl = document.querySelector('.inputRadius');
const calculate = document.querySelector('.calculate');
const result = document.querySelector('.result');

const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
}

calculate.addEventListener('click', (event) => {
    event.preventDefault();
    const radius = inputRadiusEl.value;
    
    const area = calculateCircleArea(radius);

    result.textContent = 'Area of circle whose radius is ' + radius + ` will be ${area.toFixed(2)}.`;
    inputRadiusEl.value = '';

});