function calcular() {
    document.getElementById("orcamentoForm").addEventListener("submit", function(event){
        event.preventDefault(); /* EVENT.PREVENTDEFAULT, adicionar evento de click ao botao para executar o código */

        const metros = parseFloat(document.getElementById("metros").value); /* paserfloat é um número com ponto flutuante, exemplo: 1,5 ou 2.0 - GetElementByld é para selecionar um identificador dentro do código - CONST METROS é uma variavel - VALUE é para identificar um valor */
        const dias = parseFloat(document.getElementById("dias").value);

        // const metros2 = 85;

        const custoTotal = metros * dias; /* CONST, é a variavel que calcula os metros vs os dias */

        document.getElementById("resultado").innerText = `R$ ${custoTotal.toFixed(2)}`; /* INNERTEXT, significa que vai adicionar um texto, dentro do id resultado - CUSTOTOTAL é a variavel de calculo - TOFIXED, são as quantidades de casa decimal no resultado da pesquisa na pagina */
    })
}