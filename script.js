// Seleciona os elementos do DOM
const convertButton = document.querySelector("#btn-convert");
const messageElement = document.querySelector("#message");
const kilometerInput = document.querySelector("#kmInput");
const mileOutput = document.getElementById("mOutput");

// Converte quilômetros para milhas e atualiza a interface do usuário
const handleConversion = (event) => {
    event.preventDefault();

    // Obtém o valor de entrada e converte para número
    const kilometers = parseFloat(kilometerInput.value);

    // Valida a entrada
    if (isNaN(kilometers) || kilometers === '') {
        alert("Por favor, insira um número válido para converter!");
        kilometerInput.focus();
        return;
    }

    // Realiza a conversão
    const miles = kilometers * 0.621371;

    // Atualiza a interface do usuário com os resultados
    mileOutput.value = miles.toFixed(3);
    messageElement.textContent = `${kilometers} quilômetros é igual a ${miles.toFixed(3)} milhas.`;

    // Limpa o campo de entrada
    kilometerInput.value = '';
};

// Adiciona um ouvinte de evento ao botão de conversão
convertButton.addEventListener("click", handleConversion);