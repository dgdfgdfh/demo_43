//-------------------------------------------------//

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

// e.stopPropagation(); - остановить всплытие, но на текущем элементе все обработчики выполятся.
//e.stopImmediatePropagation(); - останавливается обработка события на текущем элементе

elem1.addEventListener('click', ()=> {
    console.log('зеленый всплытие')
},true);
elem1.addEventListener('click', ()=> {
    console.log('зеленый погружение')
},true);

elem2.addEventListener('click', (e)=> {
    console.log('голубой - всплытие')
}, true);
elem2.addEventListener('click', (e)=> {
    console.log('голубой - погружение')
},true);


elem3.addEventListener('click', ()=> {
    console.log('розовый - всплытие')
},true);

elem3.addEventListener('click', ()=> {
    console.log('розовый - погружение')
},true);


//-------------------------------------------------//
let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');

button.addEventListener('click', (e)=> {
    block.classList.add('active')
    e.stopPropagation()
})

parent.addEventListener('click', ()=> {
    block.classList.remove('active')
})