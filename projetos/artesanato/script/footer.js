document.addEventListener("DOMContentLoaded", () => {
    const anoAtual = new Date().getFullYear();

    document.querySelectorAll("footer p").forEach((paragrafo) => {
        if (!paragrafo.textContent.includes("©")) {
            return;
        }

        paragrafo.textContent = paragrafo.textContent.replace(/\b\d{4}\b/, anoAtual);
    });
});
