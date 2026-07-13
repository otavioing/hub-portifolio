document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("body > header");

    if (!header) {
        return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let ultimaPosicaoScroll = window.scrollY;

    function atualizarLinksHeader() {
        if (!mobileQuery.matches) {
            header.classList.remove("header-links-hidden");
            ultimaPosicaoScroll = window.scrollY;
            return;
        }

        const posicaoAtual = window.scrollY;
        const rolandoParaBaixo = posicaoAtual > ultimaPosicaoScroll;
        const passouDoTopo = posicaoAtual > 40;

        header.classList.toggle("header-links-hidden", rolandoParaBaixo && passouDoTopo);
        ultimaPosicaoScroll = Math.max(posicaoAtual, 0);
    }

    window.addEventListener("scroll", atualizarLinksHeader, { passive: true });
    window.addEventListener("resize", atualizarLinksHeader);
    atualizarLinksHeader();
});
