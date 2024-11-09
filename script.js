function calcular() {
    document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const area = parseFloat(document.getElementById("area").value);

        const maoDeObra = parseFloat(document.getElementById("mao_de_obra").value);

    
        const custoTotal = area * maoDeObra;

        document.getElementById("resultado").innerText = `R$ ${custoTotal.toFixed(2)}`;
    });
}