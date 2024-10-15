const btnConverter = document.querySelector("#btn-convert");
const message = document.querySelector("#message");
const kmInput = document.querySelector("#kmInput");

const handleConvert = (event) => {
    event.preventDefault();
    const kilometers = document.getElementById("kmInput").value;
    const miles = kilometers * 0.621371;


    if (kilometers === '') {
        alert("Digite um valor para converter!");
        kmInput.focus();
        return
    }

    document.getElementById("mOutput").value = miles.toFixed(3);
    message.innerHTML = kilometers + " Kilometros é igual a " + miles.toFixed(3) + " Milhas.";
    kmInput.value = '';
}

btnConverter.addEventListener("click", handleConvert);