// =========================================
// 1. CONFIGURAÇÃO E DADOS
// =========================================
const caminhoPasta = "./"; 
const qtdInicial = 4;
let limiteAtual = qtdInicial;
let listaAtual = [];
let currentLang = 'pt'; // Idioma padrão

// DICIONÁRIO COMPLETO DE TRADUÇÃO
const translations = {
    pt: {
        // PERFIL
        role: "Engenheiro de Software | Backend & Pesquisa Aplicada em IA",
        age: "21 Anos",
        country: "Brasil (RS)",
        tagAi: "Sistemas de IA & LLM Fine Tuning",
        tagC: "Linguagens de Baixo Nível (C/C++)",
        tagDb: "Arquitetura de Banco de Dados (SQLite)",
        
        // CONTATO
        btnWa: "WhatsApp",
        btnEmail: "Email",
        btnCv: "Baixar CV",
        
        // SEÇÕES
        certTitle: "Certificações & Skills",
        dirCert: "DIR: ./MEUS CERTIFICADOS",
        filters: { all: "TODOS", ia: "IA & DADOS", front: "FRONT-END", back: "BACK-END", general: "GERAL" },
        btnMore: "CARREGAR MAIS",
        btnLess: "MOSTRAR MENOS",
        openPdf: "ABRIR PDF",

        // GITHUB & FOOTER
        gitTitle: "Repositórios GitHub",
        statusSync: "SINCRONIZANDO...",
        statusOnline: "SISTEMA: ONLINE",
        statusOffline: "OFFLINE",
        footer: "FIM DO ARQUIVO // DESENVOLVIDO POR JONAS GUINAMI",

        // --- TRADUÇÃO DOS NOMES DOS ARQUIVOS (CERTIFICADOS) ---
        certNames: {
            "Artifical-Intelligence-IBM-SkillsBuild": "Inteligência Artificial (IBM)",
            "Certificado-JavaScript-132-projetos-250-horas-Udemy": "JavaScript Completo: 132 Projetos (250h)",
            "Certificado-Python-150-HORAS-Udemy": "Python Masterclass (150h)",
            "Certificado-Java-Masterclass-130-hours-english-Udemy": "Java Enterprise Masterclass (130h)",
            "Certificado-Ensino-Médio-Jonas-Guinami": "Ensino Médio Completo",
            "Certificado-Desenvolvimento-Web-120-horas-Udemy": "Desenvolvimento Web Full Stack (120h)",
            "Certificado-Inglês-800-diálogos+270-horas-Udemy": "Inglês Fluente: 800 Diálogos (270h)",
            "Certificado-DB-SQL-Udemy": "Banco de Dados SQL Completo",
            "Certificado-Engenharia-de-Prompt-Udemy": "Engenharia de Prompt para IA",
            "Certificado-Figma-100-horas-Udemy": "Figma & UI Design (100h)",
            "Certificado-PHP-Udemy": "PHP 7 & 8 Completo",
            "Certificado-Redes-TCP-IP-Udemy": "Fundamentos de Redes TCP/IP"
            // (Os que não estiverem aqui usarão o nome do arquivo formatado automaticamente)
        }
    },
    en: {
        role: "Software Engineer | Backend & Applied AI Research",
        age: "21 Years",
        country: "Brazil (RS)",
        tagAi: "AI Systems & LLM Fine-tuning",
        tagC: "Low-level Languages (C/C++)",
        tagDb: "Database Architecture (SQLite)",
        
        btnWa: "WhatsApp",
        btnEmail: "Email",
        btnCv: "Download CV",
        
        certTitle: "Certifications & Skills",
        dirCert: "DIR: ./MY CERTIFICATES",
        filters: { all: "ALL FILES", ia: "AI & DATA", front: "FRONT-END", back: "BACK-END", general: "GENERAL" },
        btnMore: "LOAD MORE",
        btnLess: "SHOW LESS",
        openPdf: "OPEN PDF",

        gitTitle: "GitHub Repositories",
        statusSync: "SYNCING...",
        statusOnline: "SYSTEM: ONLINE",
        statusOffline: "OFFLINE",
        footer: "SYSTEM END OF FILE // DEVELOPED BY JONAS GUINAMI",

        certNames: {
            "Artifical-Intelligence-IBM-SkillsBuild": "Artificial Intelligence (IBM)",
            "Certificado-JavaScript-132-projetos-250-horas-Udemy": "Complete JavaScript: 132 Projects (250h)",
            "Certificado-Python-150-HORAS-Udemy": "Python Masterclass (150h)",
            "Certificado-Java-Masterclass-130-hours-english-Udemy": "Java Enterprise Masterclass (130h)",
            "Certificado-Ensino-Médio-Jonas-Guinami": "High School Diploma",
            "Certificado-Desenvolvimento-Web-120-horas-Udemy": "Web Development Full Stack (120h)",
            "Certificado-Inglês-800-diálogos+270-horas-Udemy": "Fluent English: 800 Dialogs (270h)",
            "Certificado-DB-SQL-Udemy": "Complete SQL Database Bootcamp",
            "Certificado-Engenharia-de-Prompt-Udemy": "AI Prompt Engineering",
            "Certificado-Figma-100-horas-Udemy": "Figma & UI Design (100h)",
            "Certificado-PHP-Udemy": "Complete PHP 7 & 8",
            "Certificado-Redes-TCP-IP-Udemy": "TCP/IP Network Fundamentals"
        }
    },
    es: {
        role: "Especialista en Software | Backend & Investigación Aplicada en IA",
        age: "21 Años",
        country: "Brasil (RS)",
        tagAi: "Sistemas de IA & Ajuste Fino de LLM",
        tagC: "Lenguajes de Bajo Nivel (C/C++)",
        tagDb: "Arquitectura de Bases de Datos (SQLite)",
        
        btnWa: "WhatsApp",
        btnEmail: "Correo",
        btnCv: "Descargar CV",
        
        certTitle: "Certificaciones y Habilidades",
        dirCert: "DIR: ./MIS CERTIFICADOS",
        filters: { all: "TODOS", ia: "IA Y DATOS", front: "FRONT-END", back: "BACK-END", general: "GENERAL" },
        btnMore: "CARGAR MÁS",
        btnLess: "MOSTRAR MENOS",
        openPdf: "ABRIR PDF",

        gitTitle: "Repositorios GitHub",
        statusSync: "SINCRONIZANDO...",
        statusOnline: "SISTEMA: EN LÍNEA",
        statusOffline: "FUERA DE LÍNEA",
        footer: "FIN DEL ARCHIVO // DESARROLLADO POR JONAS GUINAMI",

        certNames: {
            "Artifical-Intelligence-IBM-SkillsBuild": "Inteligencia Artificial (IBM)",
            "Certificado-JavaScript-132-projetos-250-horas-Udemy": "JavaScript Completo: 132 Proyectos (250h)",
            "Certificado-Python-150-HORAS-Udemy": "Python Masterclass (150h)",
            "Certificado-Java-Masterclass-130-hours-english-Udemy": "Java Enterprise Masterclass (130h)",
            "Certificado-Ensino-Médio-Jonas-Guinami": "Educación Secundaria Completa",
            "Certificado-Desenvolvimento-Web-120-horas-Udemy": "Desarrollo Web Full Stack (120h)",
            "Certificado-Inglês-800-diálogos+270-horas-Udemy": "Inglés Fluido: 800 Diálogos (270h)",
            "Certificado-DB-SQL-Udemy": "Base de Datos SQL Completa",
            "Certificado-Engenharia-de-Prompt-Udemy": "Ingeniería de Prompts para IA",
            "Certificado-Figma-100-horas-Udemy": "Figma y Diseño UI (100h)",
            "Certificado-PHP-Udemy": "PHP 7 y 8 Completo",
            "Certificado-Redes-TCP-IP-Udemy": "Fundamentos de Redes TCP/IP"
        }
    },
    zh: {
        role: "软件工程师 | 后端 & 应用型人工智能研究",
        age: "21 岁",
        country: "巴西 (南里奥格兰德州)",
        tagAi: "人工智能系统 & LLM 微调",
        tagC: "低级语言 (C/C++)",
        tagDb: "数据库架构 (SQLite)",
        
        btnWa: "WhatsApp",
        btnEmail: "电子邮件",
        btnCv: "下载简历",
        
        certTitle: "认证与技能",
        dirCert: "目录: ./我的证书",
        filters: { all: "全部文件", ia: "人工智能", front: "前端", back: "后端", general: "通用" },
        btnMore: "加载更多",
        btnLess: "显示更少",
        openPdf: "打开 PDF",

        gitTitle: "GitHub 代码库",
        statusSync: "同步中...",
        statusOnline: "系统：在线",
        statusOffline: "离线",
        footer: "文件结束 // 由 JONAS GUINAMI 开发",

        certNames: {
            "Artifical-Intelligence-IBM-SkillsBuild": "人工智能 (IBM)",
            "Certificado-JavaScript-132-projetos-250-horas-Udemy": "JavaScript 大全: 132 个项目 (250小时)",
            "Certificado-Python-150-HORAS-Udemy": "Python 大师班 (150小时)",
            "Certificado-Java-Masterclass-130-hours-english-Udemy": "Java 企业级大师班 (130小时)",
            "Certificado-Ensino-Médio-Jonas-Guinami": "高中毕业证书",
            "Certificado-Desenvolvimento-Web-120-horas-Udemy": "全栈 Web 开发 (120小时)",
            "Certificado-Inglês-800-diálogos+270-horas-Udemy": "流利英语: 800 个对话 (270小时)",
            "Certificado-DB-SQL-Udemy": "SQL 数据库完整教程",
            "Certificado-Engenharia-de-Prompt-Udemy": "AI 提示工程",
            "Certificado-Figma-100-horas-Udemy": "Figma 与 UI 设计 (100小时)",
            "Certificado-PHP-Udemy": "PHP 7 & 8 完整教程",
            "Certificado-Redes-TCP-IP-Udemy": "TCP/IP 网络基础"
        }
    }
};

// LISTA DE ARQUIVOS (ORDEM DE RELEVÂNCIA)
const certificados = [
    // TIER S
    "Artifical-Intelligence-IBM-SkillsBuild",
    "Certificado-JavaScript-132-projetos-250-horas-Udemy",
    "Certificado-Python-150-HORAS-Udemy",
    "Certificado-Java-Masterclass-130-hours-english-Udemy",
    
    // TIER A
    "Certificado-Ensino-Médio-Jonas-Guinami",
    "Certificado-Desenvolvimento-Web-120-horas-Udemy",
    "Certificado-Inglês-800-diálogos+270-horas-Udemy",
    "Certificado-DB-SQL-Udemy",
    "Certificado-Engenharia-de-Prompt-Udemy",
    
    // TIER B
    "Certificado-Figma-100-horas-Udemy",
    "Certificado-PHP-Udemy",
    "Certificado-Redes-TCP-IP-Udemy",
    "Certificado-Algoritmos-e-lógica-de-programação-completo-Udemy",
    
    // TIER C (Alura)
    "Certificado-1-HTML-CSS-Alura",
    "Certificado-2-HTML-CSS-Alura",
    "Certificado-3-HTML-CSS-Alura",
    "Certificado-4-HTML-CSS-Alura",
    "Certificado-1-JAVASCRIPT-Alura",
    "Certificado-2-JAVASCRIPT-Alura",
    "Certificado-3-JAVASCRIPT-Alura",
    "Certificado-Design-de-Jogos-1-Alura",
    "Certificado-Design-de-Jogos-2-Alura",
    "Certificado-Transformação-Digital-Alura",
    
    // TIER D
    "Certificado-Dev-Web-100-horas-Udemy",
    "Certificado-Inglês-para-falantes-da-lingua-portuguesa-100-horas-Udemy",
    "Dev-Web-13.5-horas-Udemy",
    "Certificado-Python-Enap",
    "Certificado-IFSul-CSS",
    "Certificado-Design-Gráfico-Udemy",
    
    // TIER E
    "Certificado-Administrando-Banco-de-Dados-Fundação-Bradesco",
    "Certificado-Implementando-Banco-de-Dados-Fundação-Bradesco",
    "Certificado-Fundamento-Hardware-e-Software-Fundação-Bradesco",
    "Certificado-IA-Fundação-Bradesco",
    "Certificado-IA-35-horas-Udemy",
    "Certificado-Pacote-Office-do-básico-ao-avançado-Udemy",
    "Certificado-Futur.E",
    "Certificado-IEL"
];

// =========================================
// 2. INICIALIZAÇÃO E EVENTOS
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    listaAtual = [...certificados];
    atualizarTela(); 
    carregarGithub();
    initTheme();
    
    // Configura botões de idioma
    const langBtns = document.querySelectorAll('.lang-btn');
    if (langBtns.length > 0) {
        langBtns[0].addEventListener('click', () => changeLang('pt'));
        langBtns[1].addEventListener('click', () => changeLang('en'));
        langBtns[2].addEventListener('click', () => changeLang('es'));
        langBtns[3].addEventListener('click', () => changeLang('zh'));
    }

    // Botões de Carga
    const btnMore = document.getElementById('btn-load-more');
    const btnLess = document.getElementById('btn-load-less');
    
    if(btnMore) btnMore.addEventListener('click', () => {
        limiteAtual += 4;
        atualizarTela();
    });

    if(btnLess) btnLess.addEventListener('click', () => {
        limiteAtual -= 4;
        if (limiteAtual < qtdInicial) limiteAtual = qtdInicial;
        atualizarTela();
    });

    // Filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const categoria = e.target.getAttribute('data-filter');
            aplicarFiltro(categoria);
        });
    });
});

// =========================================
// 3. CORE DE TRADUÇÃO (I18N)
// =========================================
function changeLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Atualiza botões do topo (active class)
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(b => b.classList.remove('active'));
    
    if(btns.length >= 4) {
        if(lang === 'pt') btns[0].classList.add('active');
        if(lang === 'en') btns[1].classList.add('active');
        if(lang === 'es') btns[2].classList.add('active');
        if(lang === 'zh') btns[3].classList.add('active');
    }

    // Função segura para trocar texto pelo ID
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if(el) {
            // Se houver um span interno (onde o texto fica), traduz o span
            const span = el.querySelector('span');
            if(span) {
                span.innerText = text;
            } else {
                // Se não, traduz o elemento direto
                el.innerText = text;
            }
        }
    };

    // Traduções Gerais
    setText('txt-role', t.role);
    setText('txt-age', t.age);
    setText('txt-country', t.country);
    setText('tag-ai', t.tagAi);
    setText('tag-c', t.tagC);
    setText('tag-db', t.tagDb);
    setText('txt-cert-title', t.certTitle);
    setText('txt-dir', t.dirCert);
    setText('txt-git-title', t.gitTitle);
    setText('txt-footer', t.footer);

    // Traduções de Botões com SVG
    const updateBtnHTML = (id, text) => {
        const btn = document.getElementById(id);
        if(btn) {
            // Pega o primeiro SVG que encontrar dentro do botão
            const svgEl = btn.querySelector('svg');
            const svgHTML = svgEl ? svgEl.outerHTML : '';
            // Atualiza mantendo o ícone
            btn.innerHTML = `${svgHTML} ${text}`;
        }
    };
    updateBtnHTML('btn-wa', t.btnWa);
    updateBtnHTML('btn-email', t.btnEmail);
    updateBtnHTML('btn-cv', t.btnCv);

    // Filtros
    const filters = document.querySelectorAll('.filter-btn');
    if(filters.length >= 5) {
        filters[0].innerText = t.filters.all;
        filters[1].innerText = t.filters.ia;
        filters[2].innerText = t.filters.front;
        filters[3].innerText = t.filters.back;
        filters[4].innerText = t.filters.general;
    }

    // Status Git
    const elGitStatus = document.getElementById('github-status');
    if(elGitStatus && !elGitStatus.innerText.includes('SYNCING')) {
        elGitStatus.innerText = t.statusOnline;
    }

    // Recarrega lista para traduzir os cards
    atualizarTela();
}

// =========================================
// 4. LÓGICA DE LISTAGEM
// =========================================
function aplicarFiltro(categoria) {
    if (categoria === 'all') {
        listaAtual = [...certificados];
    } else {
        listaAtual = certificados.filter(cert => {
            const nome = cert.toLowerCase();
            if (categoria === 'ia') return nome.includes('ia') || nome.includes('intelligence') || nome.includes('prompt') || nome.includes('dados') || nome.includes('data') || nome.includes('db') || nome.includes('sql');
            if (categoria === 'frontend') return nome.includes('html') || nome.includes('css') || nome.includes('javascript') || nome.includes('figma') || nome.includes('design') || nome.includes('web');
            if (categoria === 'backend') return nome.includes('java') || nome.includes('python') || nome.includes('php') || nome.includes('sql') || nome.includes('db') || nome.includes('dados') || nome.includes('algoritmo');
            if (categoria === 'geral') return nome.includes('inglês') || nome.includes('english') || nome.includes('redes') || nome.includes('hardware') || nome.includes('ensino') || nome.includes('office') || nome.includes('iel');
            return false;
        });
    }
    limiteAtual = qtdInicial;
    atualizarTela();
}

function atualizarTela() {
    const certContainer = document.getElementById('cert-list');
    const btnMore = document.getElementById('btn-load-more');
    const btnLess = document.getElementById('btn-load-less');
    const t = translations[currentLang];

    if (!certContainer) return; // Segurança

    certContainer.innerHTML = '';

    if (listaAtual.length === 0) {
        certContainer.innerHTML = '<p style="padding:2rem; color:var(--text-secondary);">404: No Data.</p>';
        if(btnMore) btnMore.style.display = 'none';
        if(btnLess) btnLess.style.display = 'none';
        return;
    }

    const itensParaMostrar = listaAtual.slice(0, limiteAtual);

    itensParaMostrar.forEach((nomeBase, index) => {
        let id = (index + 1).toString().padStart(2, '0');
        let nomeArquivoReal = nomeBase + ".pdf";
        let linkHref = caminhoPasta + encodeURIComponent(nomeArquivoReal);
        
        // --- AQUI ESTÁ A LÓGICA DE TRADUÇÃO DO TÍTULO ---
        // Verifica se existe tradução no dicionário 'certNames'. Se não, usa regex padrão.
        let tituloDisplay = (t.certNames && t.certNames[nomeBase]) 
            ? t.certNames[nomeBase] 
            : nomeBase.replace(/^\d+\.\s*/, '').replace(/-/g, ' '); 

        const svgArrow = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

        const html = `
            <div class="cert-card">
                <div>
                    <span class="cert-id">ITEM_${id}</span>
                    <h3>${tituloDisplay}</h3>
                </div>
                <a href="${linkHref}" target="_blank" class="btn-open">
                    ${t.openPdf} &nbsp; ${svgArrow}
                </a>
            </div>
        `;
        certContainer.innerHTML += html;
    });

    // Atualiza botões de controle
    if(btnMore) {
        btnMore.innerHTML = `${t.btnMore} (+4) <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
        btnMore.style.display = limiteAtual >= listaAtual.length ? 'none' : 'flex';
    }
    
    if(btnLess) {
        btnLess.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="18 15 12 9 6 15"></polyline></svg> ${t.btnLess}`;
        btnLess.style.display = limiteAtual > qtdInicial ? 'flex' : 'none';
    }
}

// =========================================
// 5. GITHUB & TEMA
// =========================================
function carregarGithub() {
    const user = "jonasguinami";
    const gitList = document.getElementById('github-list');
    const statusLabel = document.getElementById('github-status');

    if(!gitList) return; // Segurança

    fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`)
        .then(response => response.json())
        .then(repos => {
            const t = translations[currentLang];
            if(statusLabel) statusLabel.innerText = t.statusOnline;
            gitList.innerHTML = ''; 

            const svgArrowRight = `<svg class="proj-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

            repos.forEach(repo => {
                let nomeRaw = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');
                let nomeFormatado = nomeRaw.charAt(0).toUpperCase() + nomeRaw.slice(1).toLowerCase();
                const lang = repo.language || "CODE";
                const link = repo.has_pages ? `https://${user}.github.io/${repo.name}/` : repo.html_url;
                
                const item = `
                    <a href="${link}" target="_blank" class="project-link">
                        <div class="proj-info">
                            <span class="proj-name">${nomeFormatado}</span>
                            <span class="proj-tech">[${lang.toUpperCase()}]</span>
                        </div>
                        ${svgArrowRight}
                    </a>
                `;
                gitList.innerHTML += item;
            });
        })
        .catch(err => {
            const t = translations[currentLang];
            if(statusLabel) {
                statusLabel.innerText = t.statusOffline;
                statusLabel.style.color = "red";
            }
            gitList.innerHTML = '<p style="padding:2rem; color: #fff;">Connection Lost.</p>';
        });
}

function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }
}