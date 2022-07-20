const containerFilter = document.querySelector('.containerDropDown')

const btnTitleFilter = document.querySelector('.titleFilter')
const btnCarret = document.querySelector('.titleFilter img')


btnTitleFilter.addEventListener('click', () => {
    if (containerFilter.classList.contains('hidden')) {
        containerFilter.classList.remove('hidden')
        btnCarret.style.transform = 'rotateX(-180deg)'
    } else {
        containerFilter.classList.add('hidden')
        btnCarret.style.transform = 'rotateX(0deg)'
    }
})
