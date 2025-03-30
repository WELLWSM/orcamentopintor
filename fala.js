 
// Seleciona todos os elementos com a classe 'word'
const palavras = document.querySelectorAll('.word');

// Função para fazer a palavra ser lida em voz alta
function lerPalavra(palavraTexto) {
  // Interrompe qualquer fala em andamento antes de iniciar uma nova
  speechSynthesis.cancel();

  // Cria uma instância de SpeechSynthesisUtterance para a palavra
  const utterance = new SpeechSynthesisUtterance(palavraTexto);

  // Define a língua (opcional), por exemplo, português
  utterance.lang = 'pt-BR';

  // Reproduz o áudio de fala
  speechSynthesis.speak(utterance);
}

// Para cada palavra, adiciona os eventos mouseover e mouseout
palavras.forEach(palavra => {
  palavra.addEventListener('mouseover', (event) => {
    const palavraTexto = event.target.innerText;
    console.log('Palavra lida:', palavraTexto); // Imprime no console a palavra que está sendo lida

    // Chama a função para ler a palavra em voz alta
    lerPalavra(palavraTexto);

    // Destaca a palavra visualmente
    event.target.classList.add('highlight');
  });

  palavra.addEventListener('mouseout', (event) => {
    // Para a fala ao remover o mouse
    speechSynthesis.cancel();

    // Remove o destaque quando o mouse sai da palavra
    event.target.classList.remove('highlight');
  });
});