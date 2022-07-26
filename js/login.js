const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

/* Função para liberar o botão de jogar somente se o nome do jogador tiver mais que 2 caracteres */
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

/* Armazenar o nome do jogador e direciona para a tela de jogar */
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value);
    window.location = 'pages/game.html' 
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
