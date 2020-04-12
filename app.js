document.addEventListener('DOMContentLoaded', () => {


    // card options here
    const cardArray = [

        {
            name: 'ChuChu',
            img: 'images/ChuChu.jpg'
        },
        {
            name: 'ChuChu',
            img: 'images/ChuChu.jpg'
        },
        {
            name: 'LuLu',
            img: 'images/LuLu.jpg'
        },
        {
            name: 'LuLu',
            img: 'images/LuLu.jpg'
        },
        {
            name: 'TT',
            img: 'images/TT.jpg'
        },
        {
            name: 'TT',
            img: 'images/TT.jpg'
        },
        {
            name: 'MoMo',
            img: 'images/MoMo.jpg'
        },
        {
            name: 'MoMo',
            img: 'images/MoMo.jpg'
        },
        {
            name: 'DD',
            img: 'images/DD.jpg'
        },
        {
            name: 'DD',
            img: 'images/DD.jpg'
        },
        {
            name: 'Coco',
            img: 'images/creamheroes_coco.jpg'
        },
        {
            name: 'Coco',
            img: 'images/creamheroes_coco.jpg'
        },
        {
            name: 'All',
            img: 'images/creamheroes_all.jpg'
        },
        {
            name: 'All',
            img: 'images/creamheroes_all.jpg'
        },
        {
            name: 'LaLa',
            img: 'images/LaLa.jpg'
        },
        {
            name: 'LaLa',
            img: 'images/LaLa.jpg'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    // Game board goes here
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Gingham.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/thumbnail.jpg')
            cards[optionTwoId].setAttribute('src', 'images/thumbnail.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/Gingham.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Gingham.jpg')
            alert('Whoops! Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratz! You found them all!'
        }
    }


    // Flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})
