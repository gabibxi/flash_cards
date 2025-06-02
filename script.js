function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');

    const article = document.createElement('article');
    article.classList.add('cartao');

    article.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                ${pergunta}
            </div>
            <div class="cartao__conteudo__resposta">
                ${resposta}
            </div>
        </div>
    `;

    article.addEventListener('click', () => {
        article.classList.toggle('active');
    });

    container.appendChild(article);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof perguntas !== 'undefined' && Array.isArray(perguntas)) {
        perguntas.forEach(item => {
            criaCartao(item.categoria, item.pergunta, item.resposta);
        });
    } else {
        console.error('O array "perguntas" não foi encontrado ou não é um array. Verifique o arquivo perguntas.js.');
    }
});
