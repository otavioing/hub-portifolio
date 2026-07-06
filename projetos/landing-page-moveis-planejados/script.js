const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let index = 0;

function showSlide(i) {
    slides.style.transform = `translateX(${-i * 100}%)`;
}

document.querySelector('.next').onclick = () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
};

setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
}, 4000);

// Animação de entrada com IntersectionObserver
const animatedSelectors = [
    ".titulo",
    ".nossosservicosdesc",
    ".containercards .card",
    ".tituloprojetos",
    ".botoesprojetos",
    ".cardprojeto",
    ".localizacao .mapa",
    ".localizacao .endereco",
    ".info-loja",
    ".meuForm",
    ".slides"
];

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.18 });

animatedSelectors.forEach((selector) => {
    let seq = 0;
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("reveal");
        el.style.setProperty("--reveal-delay", `${Math.min(seq * 80, 640)}ms`);
        revealObserver.observe(el);
        seq += 1;
    });
});




const botoes = document.querySelectorAll(".botoesprojetos button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // Remove classe ativo de todos
        botoes.forEach(b => b.classList.remove("ativo"));

        // Adiciona ativo apenas no clicado
        botao.classList.add("ativo");
    });
});

function mostrarProjeto(id) {
    const projetos1 = document.getElementById("projeto1");
    const projetos2 = document.getElementById("projeto2");
    const projetos3 = document.getElementById("projeto3");
    const projetos4 = document.getElementById("projeto4");

    if (id === 1) {
        projetos1.style.display = "block";
        projetos2.style.display = "none";
        projetos3.style.display = "none";
        projetos4.style.display = "none";
    } else if (id === 2) {
        projetos1.style.display = "none";
        projetos2.style.display = "block";
        projetos3.style.display = "none";
        projetos4.style.display = "none";
    } else if (id === 3) {
        projetos1.style.display = "none";
        projetos2.style.display = "none";
        projetos3.style.display = "block";
        projetos4.style.display = "none";
    } else if (id === 4) {
        projetos1.style.display = "none";
        projetos2.style.display = "none";
        projetos3.style.display = "none";
        projetos4.style.display = "block";
    }
}

const form = document.getElementById("meuForm");
const msg = document.getElementById("msg");
const telInput = document.querySelector(".input-tel");

// Máscara de telefone (formato brasileiro)
telInput.addEventListener("input", function () {
    let value = telInput.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    // (11) 91234-5678
    if (value.length > 10) {
        telInput.value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    // (11) 1234-5678
    else if (value.length > 6) {
        telInput.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    else if (value.length > 2) {
        telInput.value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }
    else {
        telInput.value = value.replace(/(\d{0,2})/, "($1");
    }
});


// Validação completa
form.addEventListener("submit", function (e) {
    e.preventDefault();

    msg.classList.remove("msg-erro", "msg-sucesso");

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Validações simples e diretas
    if (nome.length < 3) {
        mostrarErro("Digite um nome válido.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mostrarErro("Digite um e-mail válido.");
        return;
    }

    if (telefone.length < 14) {
        mostrarErro("Digite um telefone válido.");
        return;
    }

    if (mensagem.length < 5) {
        mostrarErro("Digite uma mensagem.");
        return;
    }

    // Se passou em tudo → envia via FormSubmit
    fetch("https://formsubmit.co/otaviodominguessilva@gmail.com", {
        method: "POST",
        body: new FormData(form)
    }).then(() => {
        msg.textContent = "Mensagem enviada!";
        msg.classList.add("msg-sucesso");
        form.reset();
    }).catch(() => {
        mostrarErro("Erro ao enviar. Tente novamente.");
    });
});

function mostrarErro(texto) {
    msg.textContent = texto;
    msg.classList.add("msg-erro");
}

function copiarTexto(texto) {
    // const texto = this.textContent;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado!");
    });
};

const menu = document.querySelector(".menuhamburguer");

menu.addEventListener("click", () => {
    menu.classList.toggle("ativoo");
});

const btnMenu = document.getElementById("btnMenu");
const menuLinks = document.getElementById("menuLinks");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("ativo");
    menuLinks.classList.toggle("aberto");
});



const anoAtual = new Date().getFullYear();
document.getElementById("ano").textContent = anoAtual;

// Header esconde ao rolar para baixo e volta ao subir
const header = document.querySelector(".header");
let ultimaPosicaoScroll = window.scrollY;

window.addEventListener("scroll", () => {
    const posicaoAtual = window.scrollY;
    const descendo = posicaoAtual > ultimaPosicaoScroll;
    const passouTopo = posicaoAtual > 80;

    if (descendo && passouTopo) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    ultimaPosicaoScroll = posicaoAtual;
});
