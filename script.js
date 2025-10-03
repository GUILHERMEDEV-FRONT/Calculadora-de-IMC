document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        categoria = 'Obesidade grau I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        categoria = 'Obesidade grau II';
    } else {
        categoria = 'Obesidade grau III (mórbida)';
    }

    resultadoDiv.innerHTML = `Seu IMC é de **${imc.toFixed(2)}**. <br> Classificação: **${categoria}**.`;
});