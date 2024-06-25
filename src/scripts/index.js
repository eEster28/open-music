import { products, categories } from './productsData.js'
import {handleDarkMode} from './theme.js'


function createCard(product) {

    const card = document.createElement("li")
    card.classList.add('card')

    const imageCard = document.createElement('img')
    imageCard.classList.add('image__card')
    imageCard.src = product.img
    imageCard.alt = product.title

    const informationProduct = document.createElement('p')
    informationProduct.classList.add('information__product')
    informationProduct.innerText = `${product.band}   ${product.year}`


    const titleProduct = document.createElement('h2')
    titleProduct.classList.add('title__product')
    titleProduct.innerText = product.title

    const spanCard = document.createElement('span')
    spanCard.classList.add('conteiner__control')

    const productPrice = document.createElement('p')
    productPrice.classList.add('text__price')
    productPrice.innerText = `R$${product.price.toFixed(2)}`

    const buttonCard = document.createElement('button')
    buttonCard.classList.add('conteiner__button')
    buttonCard.innerText = 'Comprar'

    spanCard.append(productPrice, buttonCard)
    card.append(imageCard, informationProduct, titleProduct, spanCard)
    return card
}

function rederButtons(array) {
    const controlConteiner = document.querySelector('.music__genres')

    array.forEach(element => {
        const conteiner = document.createElement("li")
        const buttonMusicGenres = document.createElement('button')
        buttonMusicGenres.classList.add('button__music--generes')
        buttonMusicGenres.innerText = element

        conteiner.appendChild(buttonMusicGenres)
        controlConteiner.appendChild(conteiner)
    })
    return controlConteiner
}

function rederCard(array) {
    const containerCard = document.querySelector('.container__card')
    containerCard.innerHTML = ""

    array.forEach(element => {
        const card = createCard(element)
        containerCard.appendChild(card)
    })
    return containerCard
}

function addEvents(products, categories) {

    const buttonMusicGenres = document.querySelectorAll('.button__music--generes')
    const inputFilter = document.querySelector('#rangeInput')
    const paragraph = document.querySelector('.filter__paragraph')

    let filteredArray = products
    let categoryIndex = 0
    let inputValue = inputFilter.value

    buttonMusicGenres.forEach(button => {

        button.addEventListener('click', (element) => {

            categoryIndex = categories.findIndex(a => a === element.target.innerText)

            if (categoryIndex === 0) {
                filteredArray = products.filter(a => inputValue >= a.price)

            } else {
                filteredArray = products.filter(a => a.category === categoryIndex && inputValue >= a.price)
            }
            return rederCard(filteredArray)
        })
    })

    inputFilter.addEventListener('input', (event) => {
        inputValue = event.target.value

        paragraph.innerText = `Até R$ ${inputValue}`

        if (categoryIndex === 0) {

         filteredArray = products.filter((element) => element.price <= inputValue)

        } else {

         filteredArray = products.filter(a => a.category === categoryIndex && inputValue >= a.price)
        }

        return rederCard(filteredArray)
    })
}


rederButtons(categories)
rederCard(products)
addEvents(products, categories)
handleDarkMode()