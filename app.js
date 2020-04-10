document.addEventListener('DOMContentLoaded', () => {


    // card options here
    const cardArray = [
        {
            name: 'LaLa',
            img: 'images/20190705_LaLa.jpg'
        },
        {
            name: 'Lala',
            img: 'images/20190705_LaLa.jpg'
        },
        {
            name: 'ChuChu',
            img: 'images/20190802_ChuChu.jpg'
        },
        {
            name: 'ChuChu',
            img: 'images/20190802_ChuChu.jpg'
        },
        {
            name: 'LuLu',
            img: 'images/20190802_LuLu.jpg'
        },
        {
            name: 'LuLu',
            img: 'images/20190802_LuLu.jpg'
        },
        {
            name: 'TT',
            img: 'images/20190802_TT.jpg'
        },
        {
            name: 'TT',
            img: 'images/20190802_TT.jpg'
        },
        {
            name: 'MoMo',
            img: 'images/20190809_MoMo.jpg'
        },
        {
            name: 'MoMo',
            img: 'images/20190809_MoMo.jpg'
        },
        {
            name: 'DD',
            img: 'images/20190816_DD.jpg'
        },
        {
            name: 'DD',
            img: 'images/20190816_DD.jpg'
        },
        {
            name: 'Coco',
            img: 'images/20190828_creamheroes_coco.jpg'
        },
        {
            name: 'Coco',
            img: 'images/20190828_creamheroes_coco.jpg'
        },
        {
            name: 'All',
            img: 'images/20190828_creamheroes_all.jpg'
        },
        {
            name: 'All',
            img: 'images/20190828_creamheroes_all.jpg'
        },

    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Game board goes here
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Gingham-Black-Small.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const OptionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/Blank-White-square-thumbnail.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Blank-White-square-thumbnail.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/Gingham-Black-Small.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Gingham-Black-Small.jpg')
            alert('Whoops! Try again')
        }

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay
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
