document.addEventListener("DOMContentLoaded", function () {

    const radios = document.querySelectorAll('input[name="sexo"]');
    const quadrilGroup = document.querySelector(".quadril-group");
    const quadrilInput = document.querySelector('input[name="quadril"]');

    radios.forEach(radio => {
        radio.addEventListener("change", function () {

            if (this.value === "feminino") {
                quadrilGroup.style.display = "flex";
                quadrilInput.required = true;
            } else {
                quadrilGroup.style.display = "none";
                quadrilInput.required = false;
                quadrilInput.value = ""; // limpa o valor ao esconder
            }

        });
    });

    document.getElementById("bodyFatForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const peso = parseFloat(document.querySelector('input[name="peso"]').value);
        const altura = parseFloat(document.querySelector('input[name="altura"]').value);
        const pescoco = parseFloat(document.querySelector('input[name="pescoco"]').value);
        const cintura = parseFloat(document.querySelector('input[name="cintura"]').value);

        let percentual = 0;

        if (sexo === "masculino") {

            percentual = 86.010 * Math.log10(cintura - pescoco)
                - 70.041 * Math.log10(altura)
                + 36.76;

        } else {

            const quadril = parseFloat(document.querySelector('input[name="quadril"]').value);

            percentual = 163.205 * Math.log10(cintura + quadril - pescoco)
                - 97.684 * Math.log10(altura)
                - 78.387;
        }

        percentual = Math.max(0, percentual);
        percentual = parseFloat(percentual.toFixed(1));

        // Atualiza percentual
        document.querySelector(".result-percentage").innerHTML =
            percentual + "<span>%</span>";

        // Limita barra a 100%
        const barraPercentual = Math.min(percentual, 100);
        document.querySelector(".progress").style.width = barraPercentual + "%";

        // Massa
        const massaGorda = (peso * percentual) / 100;
        const massaMagra = peso - massaGorda;

        const metricas = document.querySelectorAll(".metrics strong");
        metricas[0].innerText = massaMagra.toFixed(1) + " kg";
        metricas[1].innerText = massaGorda.toFixed(1) + " kg";

        // Categoria
        let categoria = "";

        if (sexo === "masculino") {
            if (percentual < 6) categoria = "Essencial";
            else if (percentual < 14) categoria = "Atleta";
            else if (percentual < 18) categoria = "Fitness";
            else if (percentual < 25) categoria = "Aceitável";
            else categoria = "Obeso";
        } else {
            if (percentual < 14) categoria = "Essencial";
            else if (percentual < 21) categoria = "Atleta";
            else if (percentual < 25) categoria = "Fitness";
            else if (percentual < 32) categoria = "Aceitável";
            else categoria = "Obeso";
        }

        document.querySelector(".badge").innerText = "Categoria: " + categoria;

    });

});
