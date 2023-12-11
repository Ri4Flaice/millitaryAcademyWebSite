const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

// При мобильной версии создавать div с классом menu--open
menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
})

// Создание div с классом move-right
// Небольшой тайм аут перед переходом на страницу
function moveFormBox() {
    var formBox = document.getElementById("formBox");
    formBox.classList.toggle("move-right");
    setTimeout(function () {
        window.location.href = "../index.html";
    }, 1000);
}

// Правильное отображение элементов на странице
// Если какой то элемент открыт, другие скрывать с поле зрения
// В конце задаем новый стиль для блоков
function toggleDisplay(clickedBlock, elementId) {
    var allBlocks = document.querySelectorAll('.block');
    var table = document.getElementById('table1');
    var formAdd = document.getElementById('form-add');
    var formChange = document.getElementById('form-change');

    if (elementId === 'table1') {
        table.style.display = 'table';
        formAdd.style.display = 'none';
        formChange.style.display = 'none';
    } else if (elementId === 'form-add') {
        table.style.display = 'none';
        formAdd.style.display = 'block';
        formChange.style.display = 'none';
    } else if (elementId === 'form-change') {
        table.style.display = 'none';
        formAdd.style.display = 'none';
        formChange.style.display = 'block';
    }

    allBlocks.forEach(function (block) {
        block.style.marginTop = '50px';
        block.style.height = '100px';
        block.style.lineHeight = '90px';
    });
}

