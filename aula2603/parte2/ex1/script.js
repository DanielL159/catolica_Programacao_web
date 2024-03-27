//variavel , nao pode ser acessado externamente, nao possie visibilidade
//atributo precisa de metodo

class CalculadoraMedia {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    calcularMedia() {
        return (this.numero1 + this.numero2) / 2;
    }
}

var maior = parseInt(-10000 );

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Obtendo os valores dos campos

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificando se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').innerText = "Por favor, insira números válidos.";
        return;
    }

    // Criando uma instância da classe CalculadoraMedia
    const calculadora = new CalculadoraMedia(numero1, numero2);
    

    if(calculadora.calcularMedia() > maior){
        maior = calculadora.calcularMedia();
    }
    
    // Calculando a média e exibindo o resultado
    const media = calculadora.calcularMedia();
    document.getElementById('resultado').innerText = `A média dos números é: ${media}, e a maior venda e ${maior}`;
});