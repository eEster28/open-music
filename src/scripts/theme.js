/* Desenvolva sua lógica aqui ... */

export const handleDarkMode = () => {
    const buttonDarkMode = document.querySelector('.header__button')
    const html = document.querySelector('html')
    const imageDarkMode = document.querySelector('.image__header')
    const usersPreference = JSON.parse(localStorage.getItem('@openMusic:darkMode'))
    console.log(usersPreference)

    if (usersPreference === true) {
        imageDarkMode.src = "/src/assets/img/sun.svg"
        imageDarkMode.alt = "Imagem de sol | lingt mode"
        html.classList.add('dark-mode')

    } else if (usersPreference === false) {
        imageDarkMode.src = "/src/assets/img/moon.svg"
        imageDarkMode.alt = "Imagem de lua | dark mode"
        html.classList.remove('dark-mode')
    }

    buttonDarkMode.addEventListener('click', () => {
        html.classList.toggle('dark-mode')

        if (html.classList.contains('dark-mode')) {
            imageDarkMode.src = "/src/assets/img/sun.svg"
            imageDarkMode.alt = "Imagem de sol | lingt mode"
            localStorage.setItem('@openMusic:darkMode', true)

        } else {
            imageDarkMode.src = "/src/assets/img/moon.svg"
            imageDarkMode.alt = "Imagem de lua | dark mode"
            localStorage.setItem('@openMusic:darkMode', false)
        }
    })
}