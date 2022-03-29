console.log(1111)
const list = document.querySelectorAll('.list'),
    button = document.querySelector('.rgrgrgr')

//добавление задачи
function addTask(){
    //получаем данные со страницы
    const btn = document.querySelector('.add_btn'),
        addBtn = document.querySelector('.add_item-btn'),
        canselBtn = document.querySelector('.canncel_item-btn'),
        textare = document.querySelector('.textarea'),
        form = document.querySelector('.form')

    let value
    //работа с карточкой добавление
    btn.addEventListener('click', ()=>{
        form.style.display = 'block'
        btn.style.display = 'none'
        addBtn.style.display = 'none'
        textare.addEventListener('input', e=>{
            value = e.target.value
            if(value){
                addBtn.style.display = 'block'
            } else {
                addBtn.style.display = 'none'
            }
        })
    })
    canselBtn.addEventListener('click', ()=>{
        textare.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'
    })
    addBtn.addEventListener('click', ()=>{
       const newItems = document.createElement('div')
        newItems.classList.add('list_item')
        newItems.draggable = true
        newItems.textContent = value
        list[0].append(newItems)
        textare.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'
    })
}
addTask()
//добавление доски
function addBoard(){
    const boards = document.querySelector('.boards')
    const board = document.createElement('div')
    board.classList.add('boards_items')
    board.innerHTML = ` <span contenteditable="true" class="title">Название</span>`
    boards.append(board)
    changeTitle()
}
button.addEventListener('click',addBoard)
//добавление доски
function changeTitle(){
    const titles = document.querySelectorAll('.title')
    titles.forEach(title =>{
        title.addEventListener('click', e=> {
            e.target.textContent = ''
        })
    })
}
changeTitle()