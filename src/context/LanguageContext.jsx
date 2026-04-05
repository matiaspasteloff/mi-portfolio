import { createContext, useContext, useState } from 'react';

const translations = {
    es: {
        nav: { home: 'Inicio', about: 'Sobre Mí', skills: 'Skills', projects: 'Proyectos' },
        hero: {
            subtitle: 'Full Stack Developer | Estudiante de Ingeniería en Informática',
            description: 'Cuento con una trayectoria de 6 años programando, con foco actual en Java, Python y SQL. Busco aplicar mi capacidad de resolución de problemas en el desarrollo de software y aportar valor a los proyectos.',
            viewGitHub: 'Ver GitHub',
            contact: 'Contactar',
        },
        about: {
            tag: 'Conoceme', title: 'Sobre Mí', role: 'Full Stack Developer',
            stats: [
                { value: '6', label: 'Años programando' },
                { value: '3°', label: 'Año en UBA' },
                { value: '2+', label: 'Proyectos publicados' },
            ],
            quote: '"Transformando la teoría de la ingeniería en soluciones de software eficientes y escalables."',
            p1: 'Soy estudiante de 3º año de Ingeniería en Informática en la <strong style="color:#cbd5e1">UBA</strong>, con una sólida formación técnica base iniciada en la escuela <strong style="color:#cbd5e1">ORT</strong>. Llevo 6 años inmerso en el mundo de la programación, construyendo una base fuerte en lógica y algoritmos.',
            p2: 'Actualmente, mi foco está en el desarrollo con <strong style="color:#3b82f6">Java</strong>, <strong style="color:#3b82f6">Python</strong> y bases de datos <strong style="color:#3b82f6">SQL</strong>. Busco constantemente oportunidades para aplicar mi capacidad analítica y de resolución de problemas en el desarrollo de software.',
            contact: 'Contactar',
            downloadCV: 'Descargar CV',
            chooseLang: 'Elegir idioma del CV',
            cvLangs: [
                { code: 'es', label: 'Español', file: 'cv-es.pdf' },
                { code: 'en', label: 'English', file: 'cv-en.pdf' },
            ],
        },
        skills: {
            tag: 'Stack técnico',
            title: 'Tecnologías y Herramientas',
            categories: ['Lenguajes', 'Frameworks & Entornos', 'Bases de Datos', 'Herramientas'],
        },
        projects: {
            tag: 'Experiencia',
            title: 'Proyectos Destacados',
            viewCode: 'Ver código en GitHub',
            subtitles: ['Motor de Videojuego RPG', 'E-commerce de Juegos', 'Dashboard de Finanzas Personales'],
            descriptions: [
                'Motor de juego desarrollado desde cero sin librerías externas. Implementación de Patrones de Diseño, técnica Raycasting para renderizado 3D y sistema de colisiones propio.',
                'Arquitectura Backend MVC utilizando Flask, gestionando rutas y controladores. Diseño de modelos de datos y templates dinámicos para el catálogo de juegos y la gestión de usuarios.',
                'Aplicación full-stack de finanzas personales con React 19, TypeScript, Tailwind CSS y Vite en el frontend, y Express 5, Prisma ORM y PostgreSQL en el backend. Incluye autenticación JWT, gestión de categorías de ingresos/egresos y CRUD de transacciones.',
            ],
        },
        footer: { rights: 'Todos los derechos reservados.' },
    },

    en: {
        nav: { home: 'Home', about: 'About Me', skills: 'Skills', projects: 'Projects' },
        hero: {
            subtitle: 'Full Stack Developer | Computer Engineering Student',
            description: 'I have 6 years of programming experience, currently focused on Java, Python and SQL. I seek to apply my problem-solving skills in software development and add value to every project.',
            viewGitHub: 'View GitHub',
            contact: 'Contact',
        },
        about: {
            tag: 'Get to know me', title: 'About Me', role: 'Full Stack Developer',
            stats: [
                { value: '6', label: 'Years coding' },
                { value: '3rd', label: 'Year at UBA' },
                { value: '2+', label: 'Published projects' },
            ],
            quote: '"Transforming engineering theory into efficient and scalable software solutions."',
            p1: 'I am a 3rd-year Computer Engineering student at <strong style="color:#cbd5e1">UBA</strong>, with a solid technical foundation built at <strong style="color:#cbd5e1">ORT</strong> school. I have spent 6 years immersed in the world of programming, building a strong base in logic and algorithms.',
            p2: 'Currently, my focus is on development with <strong style="color:#3b82f6">Java</strong>, <strong style="color:#3b82f6">Python</strong> and <strong style="color:#3b82f6">SQL</strong> databases. I constantly seek opportunities to apply my analytical and problem-solving skills in software development.',
            contact: 'Contact',
            downloadCV: 'Download CV',
            chooseLang: 'Choose CV language',
            cvLangs: [
                { code: 'es', label: 'Español', file: 'cv-es.pdf' },
                { code: 'en', label: 'English', file: 'cv-en.pdf' },
            ],
        },
        skills: {
            tag: 'Tech stack',
            title: 'Technologies & Tools',
            categories: ['Languages', 'Frameworks & Environments', 'Databases', 'Tools'],
        },
        projects: {
            tag: 'Experience',
            title: 'Featured Projects',
            viewCode: 'View code on GitHub',
            subtitles: ['RPG Video Game Engine', 'Games E-commerce', 'Personal Finance Dashboard'],
            descriptions: [
                'Game engine developed from scratch without external libraries. Implementation of Design Patterns, Raycasting technique for 3D rendering, and a custom collision system.',
                'MVC Backend architecture using Flask, managing routes and controllers. Data model design and dynamic templates for the game catalog and user management.',
                'Full-stack personal finance app built with React 19, TypeScript, Tailwind CSS and Vite on the frontend, and Express 5, Prisma ORM and PostgreSQL on the backend. Features JWT authentication, income/expense category management and full transaction CRUD.',
            ],
        },
        footer: { rights: 'All rights reserved.' },
    },

    pt: {
        nav: { home: 'Início', about: 'Sobre Mim', skills: 'Skills', projects: 'Projetos' },
        hero: {
            subtitle: 'Desenvolvedor Full Stack | Estudante de Engenharia da Computação',
            description: 'Tenho 6 anos de experiência em programação, com foco atual em Java, Python e SQL. Busco aplicar minha capacidade de resolução de problemas no desenvolvimento de software e agregar valor aos projetos.',
            viewGitHub: 'Ver GitHub',
            contact: 'Contato',
        },
        about: {
            tag: 'Conheça-me', title: 'Sobre Mim', role: 'Desenvolvedor Full Stack',
            stats: [
                { value: '6', label: 'Anos programando' },
                { value: '3°', label: 'Ano na UBA' },
                { value: '2+', label: 'Projetos publicados' },
            ],
            quote: '"Transformando a teoria da engenharia em soluções de software eficientes e escaláveis."',
            p1: 'Sou estudante do 3º ano de Engenharia da Computação na <strong style="color:#cbd5e1">UBA</strong>, com uma sólida formação técnica iniciada na escola <strong style="color:#cbd5e1">ORT</strong>. Tenho 6 anos imerso no mundo da programação, construindo uma base sólida em lógica e algoritmos.',
            p2: 'Atualmente, meu foco está no desenvolvimento com <strong style="color:#3b82f6">Java</strong>, <strong style="color:#3b82f6">Python</strong> e bancos de dados <strong style="color:#3b82f6">SQL</strong>. Busco constantemente oportunidades para aplicar minha capacidade analítica e de resolução de problemas no desenvolvimento de software.',
            contact: 'Contato',
            downloadCV: 'Baixar CV',
            chooseLang: 'Escolher idioma do CV',
            cvLangs: [
                { code: 'es', label: 'Español', file: 'cv-es.pdf' },
                { code: 'en', label: 'English', file: 'cv-en.pdf' },
            ],

        },
        skills: {
            tag: 'Stack técnico',
            title: 'Tecnologias e Ferramentas',
            categories: ['Linguagens', 'Frameworks & Ambientes', 'Bancos de Dados', 'Ferramentas'],
        },
        projects: {
            tag: 'Experiência',
            title: 'Projetos em Destaque',
            viewCode: 'Ver código no GitHub',
            subtitles: ['Motor de Videogame RPG', 'E-commerce de Jogos', 'Dashboard de Finanças Pessoais'],
            descriptions: [
                'Motor de jogo desenvolvido do zero sem bibliotecas externas. Implementação de Padrões de Design, técnica de Raycasting para renderização 3D e sistema de colisões próprio.',
                'Arquitetura Backend MVC usando Flask, gerenciando rotas e controladores. Design de modelos de dados e templates dinâmicos para o catálogo de jogos e gerenciamento de usuários.',
                'Aplicação full-stack de finanças pessoais com React 19, TypeScript, Tailwind CSS e Vite no frontend, e Express 5, Prisma ORM e PostgreSQL no backend. Inclui autenticação JWT, gestão de categorias de receitas/despesas e CRUD completo de transações.',
            ],
        },
        footer: { rights: 'Todos os direitos reservados.' },
    },

    zh: {
        nav: { home: '首页', about: '关于我', skills: '技能', projects: '项目' },
        hero: {
            subtitle: '全栈开发者 | 计算机工程专业学生',
            description: '我有6年编程经验，目前专注于Java、Python和SQL。致力于将解决问题的能力运用于软件开发，为每个项目创造价值。',
            viewGitHub: '查看 GitHub',
            contact: '联系我',
        },
        about: {
            tag: '了解我', title: '关于我', role: '全栈开发者',
            stats: [
                { value: '6', label: '编程年限' },
                { value: '3年级', label: 'UBA在读' },
                { value: '2+', label: '已发布项目' },
            ],
            quote: '"将工程理论转化为高效、可扩展的软件解决方案。"',
            p1: '我是<strong style="color:#cbd5e1">UBA</strong>（布宜诺斯艾利斯大学）计算机工程专业三年级学生，在<strong style="color:#cbd5e1">ORT</strong>学校奠定了扎实的技术基础。我在编程领域浸润了6年，在逻辑与算法方面积累了深厚功底。',
            p2: '目前，我专注于<strong style="color:#3b82f6">Java</strong>、<strong style="color:#3b82f6">Python</strong>和<strong style="color:#3b82f6">SQL</strong>数据库开发。不断寻求机会，将分析能力和解决问题的能力运用于软件开发实践。',
            contact: '联系我',
            downloadCV: '下载简历',
            chooseLang: '选择简历语言',
            cvLangs: [
                { code: 'es', label: 'Español', file: 'cv-es.pdf' },
                { code: 'en', label: 'English', file: 'cv-en.pdf' },
            ],
        },
        skills: {
            tag: '技术栈',
            title: '技术与工具',
            categories: ['编程语言', '框架与环境', '数据库', '工具'],
        },
        projects: {
            tag: '项目经验',
            title: '精选项目',
            viewCode: '在 GitHub 上查看代码',
            subtitles: ['RPG 游戏引擎', '游戏电商平台', '个人财务管理平台'],
            descriptions: [
                '从零开始开发的游戏引擎，不依赖任何外部库。实现了设计模式、用于3D渲染的光线投射技术以及自定义碰撞系统。',
                '使用Flask的MVC后端架构，管理路由和控制器。为游戏目录和用户管理设计了数据模型和动态模板。',
                '使用React 19、TypeScript、Tailwind CSS和Vite构建前端，Express 5、Prisma ORM和PostgreSQL构建后端的全栈个人财务应用。包含JWT身份验证、收支分类管理及交易记录的完整增删改查功能。',
            ],
        },
        footer: { rights: '版权所有。' },
    },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);