const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
})

function moveFormBox() {
    var formBox = document.getElementById("formBox");
    formBox.classList.toggle("move-right");
    setTimeout(function () {
        window.location.href = "../index.html";
    }, 1000);
}

// function animateBlocks(clickedBlock, tableId) {
//     var allBlocks = document.querySelectorAll('.block');
//     var dataTable = document.querySelector('.data-table');

//     if (dataTable.style.display === 'none') {
//         dataTable.style.display = 'table';
//     } else {
//         dataTable.style.display = 'none';
//     }

//     allBlocks.forEach(function (block) {
//         block.style.marginTop = '50px';
//         block.style.height = '100px';
//         block.style.lineHeight = '90px';
//     });

//     // showTable(tableId)
// }

// function showTable(tableId) {
//     var tables = document.querySelectorAll('.data-table');
    
//     tables.forEach(function(table) {
//         if (table.id === tableId) {
//             table.style.display = 'table';
//         } else {
//             table.style.display = 'none';
//         }
//     });
// }

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

