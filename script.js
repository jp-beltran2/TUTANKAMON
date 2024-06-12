const missions = [
    "Missão 1: Complete uma tarefa doméstica.",
    "Missão 2: Ajude alguém em necessidade.",
    "Missão 3: Leia um capítulo de um livro.",
    "Missão 4: Faça um exercício físico.",
    "Missão 5: Medite por 10 minutos."
];

const riddles = [
    "Charada 1: O que tem uma cabeça, uma cauda, é marrom, e não tem pernas? (Resposta: Uma moeda)",
    "Charada 2: O que fica mais molhado quanto mais seca? (Resposta: Uma toalha)",
    "Charada 3: O que é cheio de buracos, mas ainda segura muita água? (Resposta: Uma esponja)",
    "Charada 4: O que sobe e desce, mas nunca se move? (Resposta: Uma escada)",
    "Charada 5: O que fica no meio do nada? (Resposta: A letra D)"
];

function drawCard(deck) {
    let cardText = "";
    if (deck === 'missions') {
        cardText = missions[Math.floor(Math.random() * missions.length)];
    } else if (deck === 'riddles') {
        cardText = riddles[Math.floor(Math.random() * riddles.length)];
    }
    document.getElementById('card-text').innerText = cardText;
    document.getElementById('card-display').style.display = 'block';
}

