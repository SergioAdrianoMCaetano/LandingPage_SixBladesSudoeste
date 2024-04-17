document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    //SEÇÃO ROLAGEM
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultarElementosHeader();
        }else{
            exibirElementosHeader();
        }
    });
    
    //SEÇÃO DE ATRAÇÕES, PROGRAMAÇÃO DAS ABAS
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //SEÇÃO FAQ, ACCORDION
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

//OCULTAR OS ELEMENTOS HEADER
function ocultarElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
//EXIBIR OS ELEMENTOS HEADER
function exibirElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//ABRIR E FECHAR FAQ
function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

//REMOVER BOTÃO ATIVO
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//ESCONDER TODAS AS ABAS
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}