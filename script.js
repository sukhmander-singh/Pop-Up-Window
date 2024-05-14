const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const container = document.querySelector('.container')


button.addEventListener('click', () => {
    container.classList.add('showpopup')
})

closeIcon.addEventListener('click', () => {
    container.classList.remove('showpopup')
})