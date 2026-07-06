const form = document.getElementById("formimc");
const resultado = document.getElementById("resultado");
const statusTexto = document.querySelector(".resultado-status");
const indicador = document.querySelector(".indicador");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Se o usuário digitou 170 ou 165 etc
    if (altura > 3) {
        altura = altura / 100;
    }

    if (!peso || !altura) return;

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(1);

    resultado.textContent = imcFormatado;

    let status = "";
    let porcentagem = (imc / 40) * 100;

    if (imc < 18.5) {
        status = "ABAIXO DO PESO";
        statusTexto.style.backgroundColor = "#3B82F6"; // azul
        indicador.style.backgroundColor = "#3B82F6";
    }
    else if (imc < 25) {
        status = "PESO NORMAL";
        statusTexto.style.backgroundColor = "#10B77F"; // verde
        indicador.style.backgroundColor = "#10B77F";
    }
    else if (imc < 30) {
        status = "SOBREPESO";
        statusTexto.style.backgroundColor = "#F59E0B"; // laranja
        indicador.style.backgroundColor = "#F59E0B";
    }
    else {
        status = "OBESIDADE";
        statusTexto.style.backgroundColor = "#EF4444"; // vermelho
        indicador.style.backgroundColor = "#EF4444";
    }


    statusTexto.textContent = status;

    // Limita entre 0 e 100
    if (porcentagem > 100) porcentagem = 100;
    if (porcentagem < 0) porcentagem = 0;

    indicador.style.left = porcentagem + "%";
});
