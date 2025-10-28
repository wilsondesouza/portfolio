import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { ExternalLink, Github } from 'lucide-react';
import { translations } from '@/lib/i18n';
import { Reveal } from '@/hooks/use-reveal';

interface ProjectsProps {
    t: typeof translations.pt;
}


export default function Projects({ t }: ProjectsProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mainProjects = [
        {
            title: 'Descubra seu dano',
            image: isMobile ? 'https://i.ibb.co/vxHZZWY6/descubraseudano-mobile.png' : 'https://i.ibb.co/Kz9DZxp5/p1.png',
            description: t.projects.title === 'Projects'
                ? 'Desktop application programmed in Python using the Custom Tkinter library for the creation of the graphical interface. Dictionaries were used to search for and return values and lists for the generation of buttons.'
                : 'Aplicativo desktop programado em Python utilizando a biblioteca Custom Tkinter para a criação da interface gráfica. Foram utilizados dicionários para buscar e retornar valores e listas para a geração dos botões.',
            links: [
                { label: 'JavaScript Web', url: 'https://descubra-seu-dano.vercel.app/' },
                { label: 'Python Desktop', url: 'https://www.mediafire.com/file/hy01mron4tcek0y/Calculadora_de_Dano.rar/file' },
            ],
            repo: 'https://github.com/wilsondesouza/Descubra-seu-dano',
        },
        {
            title: 'Metrics Hub',
            image: isMobile
                ? 'https://i.ibb.co/mFGp39DB/metricshub-mobile.png'
                : 'https://raw.githubusercontent.com/wilsondesouza/MetricsHub/refs/heads/master/static/assets/images/example/dashboard.png',
            description: t.projects.title === 'Projects'
                ? "Metrics Hub allows users to view raw data from tables and provides a dashboard to view data trends and statistics."
                : 'O Metrics Hub permite que os usuários visualizem dados brutos de tabelas e fornece um painel para visualizar tendências e estatísticas de dados.',
            links: [
                { label: t.projects.access, url: 'https://wilsondesouza.github.io/MetricsHub/' },
            ],
            repo: 'https://github.com/wilsondesouza/MetricsHub',
        },
        {
            title: 'Alert System',
            image: isMobile ? 'https://i.ibb.co/1Yn9snSC/alertsystem-moble.png' : 'https://i.ibb.co/YBJvr0fT/dashboard.png',
            description: t.projects.title === 'Projects'
                ? 'Complete sensor monitoring system with email alerts. The system continuously monitors sensor readings (CPU, RAM, Temperature, Power) and sends notifications when configured thresholds are exceeded.'
                : 'Sistema completo de monitoramento de sensores com alertas por email. O sistema monitora continuamente leituras de sensores (CPU, RAM, Temperatura, Potência) e envia notificações quando limites configurados são ultrapassados.',
            links: [
                { label: t.projects.access, url: 'https://alertsystem.onrender.com/' },
            ],
            repo: 'https://github.com/wilsondesouza/AlertSystem',
        },
    ];

    const otherProjects = [
        {
            title: 'Projetos Front-End',
            image: isMobile ? 'https://i.ibb.co/W4v7QxWz/fem1.png' : 'https://i.ibb.co/WWYVR8dy/fe1.png',
            description: t.projects.title === 'Projects'
                ? 'Set of websites developed with academic objectives to apply knowledge in HTML, CSS and JS'
                : 'Conjunto de sites desenvolvidos com objetivos acadêmicos de aplicar conhecimentos em HTML, CSS e JS',
            url: 'https://projetos-frontend.vercel.app/',
            repo: 'https://github.com/wilsondesouza/projetos-frontend',
        },
        {
            title: 'Universo do Saber',
            image: isMobile ? 'https://i.ibb.co/rRTt4vsc/rm6.png' : 'https://i.ibb.co/wZqMNmVs/r6.png',
            description: t.projects.title === 'Projects'
                ? 'Used React library to leave the site reactive and interactive. Pure JS to apply some logic in the Shopping Cart and changing Themes.'
                : 'Utilizado biblioteca React para deixar o site reativo e interativo. JS puro para aplicar algumas lógicas no Carrinho de Compras e na alteração de Temas.',
            url: 'https://projeto-js-e-react.vercel.app/',
            repo: 'https://github.com/wilsondesouza/projeto_js_e_react',
        },
        {
            title: 'Home Page',
            image: isMobile ? 'https://i.ibb.co/wXwxN7H/home-page-mobile.png' : 'https://i.ibb.co/bMv9SGWK/home-page.png',
            description: t.projects.title === 'Projects'
                ? 'Website built to be the home page of your browser, containing space to save your bookmarks.'
                : 'Site construído para ser a página inicial do seu navegador, contendo espaço para salvar seus favoritos.',
            url: 'https://wilsondesouza.github.io/home-page/',
            repo: 'https://github.com/wilsondesouza/home-page',
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-background">
            <div className="container max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        {t.projects.title}
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        {t.projects.description}
                    </p>
                </div>

                <Carousel className="w-full max-w-5xl mx-auto mb-16">
                    <CarouselContent>
                        {mainProjects.map((project, index) => (
                            <CarouselItem key={index}>
                                <Reveal className="w-full" visibleClassName="animate-in fade-in slide-in-from-bottom">
                                    <Card className="border-2 overflow-hidden group">
                                        <CardContent className="p-0">
                                            <div className="relative aspect-video overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                    <div className="text-white space-y-4 w-full">
                                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                                        <p className="text-sm text-white/90">{project.description}</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.links.map((link, idx) => (
                                                                <Button key={idx} asChild size="sm" variant="secondary">
                                                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                                        {link.label}
                                                                    </a>
                                                                </Button>
                                                            ))}
                                                            <Button asChild size="sm" variant="outline" className="!bg-transparent !hover:bg-transparent border-white text-white">
                                                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                                    <Github className="w-4 h-4 mr-2" />
                                                                    {t.projects.repository}
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Reveal>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center text-foreground">
                        {t.projects.others}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <CardContent className="p-0">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-0"
                                        />
                                        <div className="absolute inset-0 bg-card p-6 flex flex-col justify-between transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center">
                                            <div>
                                                <h4 className="text-xl font-bold mb-3 text-foreground">{project.title}</h4>
                                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button asChild size="sm" className="flex-1">
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                        {t.projects.access}
                                                    </a>
                                                </Button>
                                                <Button asChild size="sm" variant="outline" className="flex-1">
                                                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                        {t.projects.repository}
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline">
                        <a
                            href="https://github.com/wilsondesouza?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            {t.projects.more}
                        </a>
                    </Button>
                </div>
            </div>
        </section >
    );
}