// Função para calcular o valor da pintura
function calcularValorPintura() {
    // Obter os valores dos inputs
    let area = parseFloat(document.getElementById('area').value);
    let prazo = parseInt(document.getElementById('prazo').value);
    let transporte = parseInt(document.getElementById('transporte').value);
    let alimentacao = parseInt(document.getElementById('alimentacao').value);

    // Calcular o valor base da pintura
    let valorBase = area * window.valores.area + prazo * window.valores.prazo + transporte * window.valores.transporte + alimentacao * window.valores.alimentacao;

    // Verificar o tipo de trabalho selecionado e adicionar ao valor base
    if (document.getElementById('parede').checked) {
        valorBase += window.valores.valorParede; //Busca o valor 100 da base dados
    }
    if (document.getElementById('teto').checked) {
        valorBase += window.valores.valorTeto; //Busca o valor 150 da base dados
    }
    if (document.getElementById('portao').checked) {
        valorBase += window.valores.valorPortao;
    }

    // Verificar a qualidade do material selecionada e ajustar o valor base
    if (document.getElementById('medio').checked) {
        valorBase += window.valores.multiplicadorMedio; //Valor da qualidade do material Medio 1.2
    } 

    if (document.getElementById('premium').checked) {
        valorBase += window.valores.multiplicadorPremium; //Valor da qualidade do material Premium 1.5
    }

    // Verificar se há ajudante de pintura e adicionar ao valor base
    if (document.getElementById('ajudante_sim').checked) {
        valorBase += window.valores.valorAjudante; // Ajudante da base de dados 200
    }

    // Exibir o resultado na div de resultado
    document.getElementById('resultado').innerHTML = " R$" + valorBase.toFixed(2);
}

// Adicionar evento de clique ao botão de calcular
document.getElementById('calcularButton').addEventListener('click', calcularValorPintura);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("BaixarPDF").addEventListener("click", gerarPDF);
});

function gerarPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obter os valores dos inputs
    let area = document.getElementById('area').value;
    let prazo = document.getElementById('prazo').value;
    let transporte = document.getElementById('transporte').value;
    let alimentacao = document.getElementById('alimentacao').value;
    let resultado = document.getElementById('resultado').innerText;

    doc.setFont("helvetica", "bold");
    doc.text("Orçamento de Pintura", 10, 10);
    doc.setFont("helvetica", "normal");

    doc.text(`Área: ${area} m²`, 10, 20);
    doc.text(`Prazo: ${prazo} dias`, 10, 30);
    doc.text(`Transporte: R$ ${transporte}`, 10, 40);
    doc.text(`Alimentação: R$ ${alimentacao}`, 10, 50);
    doc.text(`Total: ${resultado}`, 10, 60);

    doc.save("orcamento-pintura.pdf");
}