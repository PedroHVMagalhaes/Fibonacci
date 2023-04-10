function calcular() {
	// Obter o número informado pelo usuário
	let numero = parseInt(document.getElementById("numero").value);

	// Verificar se o número é um inteiro positivo
	if (isNaN(numero) || numero < 0 || numero % 1 !== 0) {
		document.getElementById("resultado").textContent = "Por favor, informe um número inteiro positivo.";
		return;
	}

	// Calcular a sequência de Fibonacci até o número informado
	let fibonacci = [0, 1];
	while (fibonacci[fibonacci.length - 1] < numero) {
		let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
		fibonacci.push(proximo);
	}

	// Verificar se o número informado pertence à sequência de Fibonacci
	if (fibonacci.includes(numero)) {
		document.getElementById("resultado").textContent = `${numero} pertence à sequência de Fibonacci!`;
	} else {
		document.getElementById("resultado").textContent = `${numero} não pertence à sequência de Fibonacci.`;
	}
}
