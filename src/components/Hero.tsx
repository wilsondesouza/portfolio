import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';
import { Reveal } from '@/hooks/use-reveal';

interface HeroProps {
    t: typeof translations.pt;
    lang: Language;
}

export default function Hero({ t, lang }: HeroProps) {
    const [currentRole, setCurrentRole] = useState(0);
    const [currentCard, setCurrentCard] = useState(0);
    const roles = t.hero.roles;

    const cards = [
        {
            title: 'IoT',
            items: ['Automação', 'Edge Computing', 'Big Data']
        },
        {
            title: `Engenheiro de I.A`,
            items: ['Visão Computacional', 'Multi-Agents', 'PNL']
        },
        {
            title: 'Developer',
            items: ['Mobile', 'Back-End', 'Front-End']
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % cards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [cards.length]);

    const cvUrl = lang === 'pt'
        ? 'https://github.com/wilsondesouza/portfolio/blob/main/assets/curriculum/wilsonsouzajunior_portugues.pdf'
        : 'https://github.com/wilsondesouza/portfolio/blob/main/assets/curriculum/wilsonsouzajunior_english.pdf';

    const handlePrevCard = () => {
        setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleNextCard = () => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Reveal visibleClassName="animate-in fade-in slide-in-from-left duration-700" className="space-y-6">
                        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
                            <h3 className="text-xl md:text-2xl text-primary font-semibold">
                                {t.hero.name}
                            </h3>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                                Wilson de Souza Júnior
                            </h1>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild size="lg" className="gap-2">
                                    <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                                        <Download className="w-4 h-4" />
                                        {t.hero.downloadCV}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Reveal>

                    <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
                        <Reveal visibleClassName="animate-in fade-in slide-in-from-right duration-700 delay-300" className="relative">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center overflow-hidden">
                                    <div className="w-64 h-80 bg-gradient-to-b from-primary/30 to-primary/10 rounded-3xl transform rotate-6 shadow-2xl flex items-center justify-center relative">
                                        {/* Botão Anterior */}
                                        <button
                                            onClick={handlePrevCard}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors backdrop-blur-sm"
                                            aria-label="Anterior"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-primary" />
                                        </button>

                                        {/* Card */}
                                        <div className="w-56 h-72 bg-card rounded-2xl transform -rotate-6 shadow-xl border-4 border-primary/20 flex flex-col items-center justify-center p-6 transition-all duration-500">
                                            <div className="text-center space-y-4">
                                                <div className="text-lg font-bold text-primary">
                                                    {cards[currentCard].title}
                                                </div>
                                                <div className="space-y-1 text-sm text-muted-foreground">
                                                    {cards[currentCard].items.map((item, index) => (
                                                        <div key={index}>{item}</div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>

                                        {/* Botão Próximo */}
                                        <button
                                            onClick={handleNextCard}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors backdrop-blur-sm"
                                            aria-label="Próximo"
                                        >
                                            <ChevronRight className="w-5 h-5 text-primary" />
                                        </button>
                                    </div>
                                </div>

                                {/* Indicadores */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {cards.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCard(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentCard
                                                ? 'w-8 bg-primary'
                                                : 'w-2 bg-primary/30 hover:bg-primary/50'
                                                }`}
                                            aria-label={`Ir para card ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}