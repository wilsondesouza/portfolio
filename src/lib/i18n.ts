export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            projects: 'Projetos',
            contact: 'Contato',
        },
        hero: {
            name: "I'm",
            roles: [
                'Engenheiro da Computação',
                'Engenheiro de IoT',
                'Desenvolvedor Web',
                'Desenvolvedor Python',
            ],
            downloadCV: 'Download CV',
            language: 'Language',
        },
        about: {
            title: 'Sobre',
            skills: 'Skills',
            hello: 'Olá, meu nome é Wilson.',
            description: `De forma sucinta, posso dizer que me considero uma pessoa organizada e sistemática, ética e profissional, investigativa, convencional e realístico (Referências ao teste de Holland).

Por conta disso decidi realizar uma transição de carreira para uma que se adeque mais ao meu perfil, e assim decidi entrar na área de T.I quando iniciei meus estudos em Engenharia de Computação.

Desde então, constantemente busco novos conhecimentos sobre as diversas tecnologias da área, sempre me qualificando através de certificados. E para por em prática as habilidades adquiridas busco uma posição de trainee, para também aprender novas habilidades e ferramentas na intenção de desenvolver minha carreira.`,
            freelance: 'Trabalhando em meus próprios projetos pessoais e para pequenos comerciantes da região',
            education: 'Educação',
            certificates: 'Certificados',
            certifications: 'Certificações',
        },
        projects: {
            title: 'Projetos',
            description: 'A seguir deixarei alguns projetos que já desenvolvi. Desde projetos simples, práticos, funcionais até os mais complexos. Alguns projetos foram construídos para servir de avaliação para alguns cursos, e outros foram feitos para assimilar e solidificar meus conhecimentos e habilidades, sendo estes projetos pessoais.',
            others: 'Outros Projetos',
            more: 'Mais Projetos',
            viewOptions: 'Ver Opções',
            repository: 'Repositório',
            access: 'Acessar',
            download: 'Download APK',
        },
        contact: {
            description: 'Estou disponível para contato, seja para oportunidades profissionais ou para uma equipe de estudos e aperfeiçoamento.',
            name: 'Nome',
            email: 'Email',
            message: 'Como posso te ajudar?',
            send: 'Enviar',
            sending: 'Enviando...',
            sent: 'Enviado',
            error: 'Erro',
        },
        footer: {
            developer: '2023-2025 • Desenvolvido por @wilsondesouza',
            host: 'Hospedado em GitHub Pages',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            name: "I'm",
            roles: [
                'Computer Engineer',
                'IoT Engineer',
                'Web Developer',
                'Python Developer',
            ],
            downloadCV: 'Download CV',
            language: 'Language',
        },
        about: {
            title: 'About',
            skills: 'Skills',
            hello: 'Hello, my name is Wilson',
            description: `Briefly, I can say that I consider myself an organized and systematic person, ethical and professional, investigative, conventional and realistic (References to the Holland test).

Because of this, I decided to make a career transition to one that better suits my profile, and so I decided to enter the IT area when I started my studies in Computer Engineering.

Since then, I have constantly sought new knowledge about the various technologies in the area, always qualifying myself through certificates. And to put the acquired skills into practice, I seek a trainee position, to also learn new skills and tools with the intention of developing my career.`,
            freelance: 'Working on my own personal projects and for small entrepreneur in the region',
            education: 'Education',
            certificates: 'Certificates',
            certifications: 'Certifications',
        },
        projects: {
            title: 'Projects',
            description: 'Below I will leave some projects that I have already developed. From simple, practical, functional projects to the most complex. Some projects were created to serve as an assessment for some courses, and others were made to assimilate and solidify my knowledge and skills, these being personal projects.',
            others: 'Others Projects',
            more: 'More Projects',
            viewOptions: 'View Options',
            repository: 'Repository',
            access: 'Access',
            download: 'Download APK',
        },
        contact: {
            description: 'I am available for contact, whether for professional opportunities or for a study and improvement team.',
            name: 'Name',
            email: 'Email',
            message: 'How can I help you?',
            send: 'Send',
            sending: 'Sending...',
            sent: 'Sent',
            error: 'Error',
        },
        footer: {
            developer: '2023-2025 • Developed by @wilsondesouza',
            host: 'Hosted in GitHub Pages',
        },
    },
};

export const useTranslation = (lang: Language) => {
    return translations[lang];
};