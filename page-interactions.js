(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const backToTopButton = document.querySelector('[data-back-to-top]');

    if (revealElements.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -8% 0px',
        });

        revealElements.forEach((element) => revealObserver.observe(element));
    }

    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 600) {
                backToTopButton.classList.add('is-visible');
            } else {
                backToTopButton.classList.remove('is-visible');
            }
        };

        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
    }
})();

async function copiarParaAreaDeTransferencia(texto) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(texto);
        } else {
            copiarComFallback(texto);
        }

        console.log('Texto copiado com sucesso!');
        mostrarNotificacao('Link copiado!');
    } catch (err) {
        console.error('Falha ao copiar o texto: ', err);
        mostrarNotificacao('Nao foi possivel copiar o link.', 'error');
    }
}

function copiarComFallback(texto) {
    const campoTemporario = document.createElement('textarea');

    campoTemporario.value = texto;
    campoTemporario.setAttribute('readonly', '');
    campoTemporario.style.position = 'fixed';
    campoTemporario.style.opacity = '0';
    campoTemporario.style.pointerEvents = 'none';

    document.body.appendChild(campoTemporario);
    campoTemporario.select();
    const copiado = document.execCommand('copy');
    document.body.removeChild(campoTemporario);

    if (!copiado) {
        throw new Error('Comando de copia recusado pelo navegador.');
    }
}

function mostrarNotificacao(mensagem, tipo = 'success') {
    let notificacao = document.querySelector('[data-copy-notification]');

    if (!notificacao) {
        notificacao = document.createElement('div');
        notificacao.className = 'copy-notification';
        notificacao.setAttribute('data-copy-notification', '');
        notificacao.setAttribute('role', 'status');
        notificacao.setAttribute('aria-live', 'polite');
        document.body.appendChild(notificacao);
    }

    window.clearTimeout(mostrarNotificacao.timeoutId);

    notificacao.textContent = mensagem;
    notificacao.classList.toggle('is-error', tipo === 'error');
    notificacao.classList.add('is-visible');

    mostrarNotificacao.timeoutId = window.setTimeout(() => {
        notificacao.classList.remove('is-visible');
    }, 2600);
}
