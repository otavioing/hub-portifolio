(() => {
    const projectGrid = document.querySelector('[data-project-grid]');
    const filterButtons = document.querySelectorAll('[data-category]');
    const searchInput = document.querySelector('[data-project-search]');

    if (!projectGrid || !filterButtons.length || !searchInput) {
        return;
    }

    const projectData = [
        {
            id: 'advocacia',
            nome: 'advocacia',
            categoria: 'advocacia',
            descricao: 'Landing page moderna e responsiva desenvolvida para um escritório de advocacia, com foco em transmitir credibilidade e facilitar o contato com novos clientes.',
            imagem: '/imgs/advocacia.png',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            linkDemo: '/projetos/landing-page-de-adv/index.html',
            linkModelo: '#',
        },
        {
            id: 'materiais-de-construcao',
            nome: 'materiais de construção',
            categoria: 'Construção',
            descricao: 'Site institucional desenvolvido para uma loja de materiais de construção, com catálogo de produtos e solicitação de orçamentos de forma prática e rápida.',
            imagem: '/imgs/materiais-de-construcao.png',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            linkDemo: '/projetos/landing-page-loja-de-materiais-de-construção/index.html',
            linkModelo: '#',
        },
        {
            id: 'moveis-planejados',
            nome: 'móveis planejados',
            categoria: 'Serviços',
            descricao: 'Site institucional desenvolvido para uma empresa de móveis planejados, com galeria de projetos realizados e integração direta com o WhatsApp para atendimento.',
            imagem: '/imgs/moveis-planejados.png',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            linkDemo: '/projetos/landing-page-moveis-planejados/index.html',
            linkModelo: '#',
        },
        {
            id: 'calcular-IMC',
            nome: 'calcular IMC',
            categoria: 'Serviços',
            descricao: 'Aplicação web desenvolvida para calcular IMC, TMB e Percentual de Gordura Corporal de forma rápida, prática e intuitiva.',
            imagem: '/imgs/calcular-IMC.png',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            linkDemo: '/projetos/calcular-IMC/index.html',
            linkModelo: '#',
        },
        {
            id: 'quiz',
            nome: 'quiz',
            categoria: 'quiz',
            descricao: 'Aplicação web desenvolvida para auxiliar nos estudos por meio de quizzes de múltipla escolha, com sistema de pontuação e ranking de usuários.',
            imagem: '/imgs/quiz.png',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            linkDemo: '/projetos/quiz/index.html',
            linkModelo: '#',
        },
        {
            id: 'artesanato',
            nome: 'Artesanato',
            categoria: 'Artesanato',
            descricao: 'Site institucional desenvolvido para uma loja de artesanato, com catálogo de produtos e integração direta com o WhatsApp para atendimento.',
            imagem: '/imgs/artesanato.png',
            tecnologias: ['HTML', 'tailwindcss', 'JavaScript'],
            linkDemo: '/projetos/artesanato/index.html',
            linkModelo: '#',
        },
        {
            id: 'academia',
            nome: 'Academia',
            categoria: 'Academia',
            descricao: 'Site institucional desenvolvido para uma academia, com informações sobre serviços, equipamentos e integração direta com o WhatsApp para atendimento.',
            imagem: '/imgs/academia.png',
            tecnologias: ['HTML', 'tailwindcss', 'JavaScript'],
            linkDemo: '/projetos/academia/index.html',
            linkModelo: '#',
        },
    ];

    const projectState = {
        category: 'todos',
        query: '',
    };

    const normalizeText = (value) => value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const matchesProject = (project) => {
        const categoryMatches = projectState.category === 'todos'
            || normalizeText(project.categoria) === projectState.category;

        const searchableText = [
            project.nome,
            project.categoria,
            project.descricao,
            project.tecnologias.join(' '),
        ].join(' ');

        const queryMatches = normalizeText(searchableText).includes(projectState.query);

        return categoryMatches && queryMatches;
    };

    const renderProjects = () => {
        const visibleProjects = projectData.filter(matchesProject);

        if (!visibleProjects.length) {
            projectGrid.innerHTML = `
                <div class="projects-empty">
                    <h2>Nenhum projeto encontrado</h2>
                    <p>Tente outro filtro ou ajuste a busca para localizar um projeto.</p>
                </div>
            `;
            return;
        }

        projectGrid.innerHTML = visibleProjects.map((project) => `
            <article class="project-card" data-project-id="${project.id}">
                <div class="project-media">
                    <img src="${project.imagem}" alt="Preview do projeto ${project.nome}">
                    <span class="project-badge">${project.categoria}</span>
                </div>

                <div class="project-body">
                    <h2>${project.nome}</h2>
                    <p>${project.descricao}</p>

                    <div class="project-tags" aria-label="Tecnologias utilizadas">
                        ${project.tecnologias.map((tag) => `<span>${tag}</span>`).join('')}
                    </div>

                    <div class="project-actions">
                        <a class="project-button project-button-demo" href="${project.linkDemo}">Ver demonstração</a>
                    </div>
                </div>
            </article>
        `).join('');
    };

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            projectState.category = normalizeText(button.dataset.category);

            filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
            renderProjects();
        });
    });

    searchInput.addEventListener('input', (event) => {
        projectState.query = normalizeText(event.target.value.trim());
        renderProjects();
    });

    renderProjects();

    window.addEventListener('load', () => {
        const currentPortfolioLink = document.querySelector('.site-nav a[href="projetos.html"]');
        if (currentPortfolioLink) {
            currentPortfolioLink.classList.add('is-current-page');
        }
    });
})();