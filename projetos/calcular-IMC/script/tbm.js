const btn = document.querySelector(".btn-calcular");

btn.addEventListener("click", function () {

    const genero = document.querySelector('input[name="genero"]:checked').value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const atividadeTexto = document.getElementById("atividade").value;

    if (!idade || !peso || !altura) return;

    let tmb;

    // Cálculo TMB
    if (genero === "masculino") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    // Fator de atividade
    let fator;

    if (atividadeTexto.includes("Sedentário")) {
        fator = 1.2;
    } 
    else if (atividadeTexto.includes("Levemente")) {
        fator = 1.375;
    } 
    else if (atividadeTexto.includes("Moderadamente")) {
        fator = 1.55;
    } 
    else {
        fator = 1.725;
    }

    const get = tmb * fator;

    const manter = Math.round(get);
    const perder = Math.round(get - 500);
    const ganhar = Math.round(get + 500);

    // Atualiza TMB
    document.querySelector(".resultado h3").textContent = Math.round(tmb);

    // Atualiza GET
    document.querySelector(".get-item.manter strong").textContent = manter + " kcal";
    document.querySelector(".get-item.perder strong").textContent = perder + " kcal";
    document.querySelector(".get-item.ganhar strong").textContent = ganhar + " kcal";
});
