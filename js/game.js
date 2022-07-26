const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.jogador');
const timer = document.querySelector('.timer');

/* Lista das imagens das cartas */
const characters = [
    'luffy',
    'sanji',
    'zoro',
    'usopp',
    'jinbei',
    'shanks',
    'nami',
    'ace',
    'law',
    'yamato',
];

/* Função separada para criar um elemento */
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

/* Função para verificar o fim do jogo */
const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop); /* Para o timer */
        alert(`${spanPlayer.innerHTML} SE TORNOU O REI DOS PIRATAS`);
    }
}

/* Preenche a String das cartas */
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const seconCharacter = secondCard.getAttribute('data-character');

    /* Verifica se as cartas tem character igual ou não */
    if (firstCharacter === seconCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);

    }

}

/* Função para virar a carta e se acertou a dupla */
const revealCard = ({ target }) => {

    /* So deixa virar uma carta que não está virada */
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

/* Função que cria as cartas */
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;

}

/* Função para gerar o jogo */
const loadGame = () => {

    /* Duplica as cartas */
    const duplicateCharacters = [...characters, ...characters];

    /* Arrray que embaralha as cartas */
    const shuffled = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffled.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {

    this.loop = setInterval(() => {     
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
   }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('jogador');
    startTimer();
    loadGame();
  }

