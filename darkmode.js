let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click',()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    menu.classList.toggle('dark')
    letras.classList.toggle('dark')
    positivo.classList.toggle('dark')
    negativo.classList.toggle('dark')
})
//1° Add content;
//2° add videos
//SLIDE CARROSSEL;
//Add menu dropdown horizontal;

function changeFontSize(action) {
    const container = document.getElementById('letras');
    const elements = ['h1', 'p', 'h2', 'li'];
    elements.forEach(element => {
        const selectors = container.querySelectorAll(element);
        selectors.forEach(selector => {
            let value = getComputedStyle(selector).getPropertyValue('font-size');
            value = value.replace('px', '');
            value = action === '+' ? parseInt(value) + 1 : parseInt(value) - 1;
            selector.style.fontSize = `${value}px`;
        });
    });
}
