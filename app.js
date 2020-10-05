


// PAGINA GALLERIA

const $ = (selettore) => document.querySelector(selettore);

$('#filtro1 button').addEventListener ('click', () => {
    const style = $('#filtro1 .div-filtro1').style;
    console.log(style.display);

    if(style.display === 'block' || style.display === '') {
        style.display = 'none';
    } else {
        style.display = 'block';
    } 
});



$('#filtro2 button').addEventListener ('click', () => {
    const style = $('#filtro2 .div-filtro2').style;
    console.log(style.display);

    if(style.display === 'block' || style.display === '') {
        style.display = 'none';
    } else {
        style.display = 'block';
    } 
});



$('#filtro3 button').addEventListener ('click', () => {
    const style = $('#filtro3 .div-filtro3').style;
    console.log(style.display);

    if(style.display === 'block' || style.display === '') {
        style.display = 'none';
    } else {
        style.display = 'block';
    } 
});




