import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useTranslation, Language } from '@/lib/i18n';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Index() {
    const { theme, toggleTheme } = useTheme();
    const [lang, setLang] = useState<Language>('pt');
    const t = useTranslation(lang);
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        setLang(prev => prev === 'pt' ? 'en' : 'pt');
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navItems = [
        { label: t.nav.home, id: 'home' },
        { label: t.nav.about, id: 'about' },
        { label: t.nav.projects, id: 'projects' },
        { label: t.nav.contact, id: 'contact' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/5">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleLanguage}
                                title={t.hero.language}
                            >
                                <Languages className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                title="Toggle Theme"
                            >
                                {theme === 'light' ? (
                                    <Moon className="h-5 w-5" />
                                ) : (
                                    <Sun className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Hero t={t} lang={lang} />
                <About t={t} />
                <Projects t={t} />
                <Contact t={t} />
            </main>

            {/* Footer */}
            <footer className="bg-card border-t py-8">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            {t.footer.developer}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {t.footer.host}
                        </p>
                    </div>
                </div>
            </footer>

            {/* Fixed Social Links */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40">
                {[
                    { icon: '🇧🇷', url: '#', action: () => setLang('pt'), title: 'Português' },
                    { icon: '🇺🇸', url: '#', action: () => setLang('en'), title: 'English' },
                ].map((item, index) => (
                    <button
                        key={index}
                        onClick={item.action}
                        title={item.title}
                        className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center text-xl hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}