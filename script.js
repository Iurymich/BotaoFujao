const fundo = document.querySelector('.fundo');
const pergunta = document.querySelector('.pergunta');
const simBt = document.querySelector('.sim-bt');
const naoBt = document.querySelector('.nao-bt');

const fundoRect = fundo.getBoundingClientRect();
const naoBtRect = naoBt.getBoundingClientRect();

simBt.addEventListener('click', () => {
    pergunta.innerHTML = 'Também te amo s2 *-*';
});

naoBt.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (fundoRect.width - naoBtRect.width)) + 1;
    const j = Math.floor(Math.random() * (fundoRect.height - naoBtRect.height)) + 1;

    naoBt.style.left = i + 'px';
    naoBt.style.top = j + 'px';
});

naoBt.addEventListener('click', () => {
    //pergunta.innerHTML = 'Fui iludido =(';

    const i = Math.floor(Math.random() * (fundoRect.width - naoBtRect.width)) + 1;
    const j = Math.floor(Math.random() * (fundoRect.height - naoBtRect.height)) + 1;

    naoBt.style.left = i + 'px';
    naoBt.style.top = j + 'px';
});