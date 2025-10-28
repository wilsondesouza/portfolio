import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Search } from 'lucide-react';
import { translations } from '@/lib/i18n';
import { Reveal } from '@/hooks/use-reveal';

interface AboutProps {
    t: typeof translations.pt;
}

export default function About({ t }: AboutProps) {
    const [activeView, setActiveView] = useState<'about' | 'skills'>('about');

    const skills = {
        softSkills: [
            { name: 'Scrum', img: 'https://i.ibb.co/JR1ytsC9/agil.png' },
            { name: 'Design Thinking', img: 'https://i.ibb.co/dJQXMNVr/design-thinking.png' },
            { name: 'Kanban', img: 'https://i.ibb.co/8gc0FsHL/kanban.png' },
        ],
        cloud: [
            { name: 'AWS', img: 'https://camo.githubusercontent.com/ecb07957af8fa1dafd763103a2732a8c156a607bb4cd9f13fe98176f91246756/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39332f416d617a6f6e5f5765625f53657276696365735f4c6f676f2e737667' },
            { name: 'Azure', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
            { name: 'Google Cloud', img: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/googlecloud/googlecloud-original.svg' }
        ],
        development: [
            { name: 'Python', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
            { name: 'Flutter', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
            { name: 'JavaScript', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
            { name: 'React', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        ],
        tools: [
            { name: 'Android Studio', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg' },
            { name: 'VS Code', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
            { name: 'Kali Linux', img: 'https://camo.githubusercontent.com/9fd512a4acfb5d076a0f358507efc6886911a0f555274491f0308ec55b0738fc/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f583233626e72344d37455145464e3236755f4961716164506a4767564f44697631385a55507377772d55576a415f6d37596b4979517668774453335268667244683057553d773234302d683438302d7277' },
            { name: 'Figma', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
        ],
    };

    const education = [
        {
            title: 'Engenharia da Computação',
            period: '2023 - 2026',
            institution: 'Descomplica',
        },
        {
            title: 'Logística',
            period: '2016 - 2020',
            institution: 'Estácio de Sá',
        },
    ];

    const certificates = [
        { title: 'Python Essentials II', year: '2025', institution: 'Cisco Networking Academy' },
        { title: 'Engenharia de Dados', year: '2025', institution: 'Escola do Trabalhador' },
        { title: 'Power BI Analyst', year: '2024', institution: 'dio' },
        { title: 'AWS re/Start2', year: '2024', institution: 'Escola da Nuvem' },
        { title: 'Blockchain Developer with Solidity', year: '2024', institution: 'dio' },
        { title: 'Desenvolvimento Mobile com Flutter', year: '2023', institution: 'Santander' },
        { title: 'FrontEnd Development', year: '2023', institution: 'Instituto Nu' },
    ];

    const certifications = [
        { title: 'Azure AI Fundamentals', year: '2025', institution: 'Microsoft' },
        { title: 'Azure Fundamentals', year: '2025', institution: 'Microsoft' },
        { title: 'Certified Cloud Practitioner', year: '2024', institution: 'AWS' },

    ];

    return (
        <section id="about" className="py-20 px-4 bg-muted/30">
            <div className="container max-w-6xl">
                <div className="flex justify-center gap-4 mb-12">
                    <Button
                        variant={activeView === 'about' ? 'default' : 'outline'}
                        size="lg"
                        onClick={() => setActiveView('about')}
                        className="gap-2"
                    >
                        <MessageSquare className="w-4 h-4" />
                        {t.about.title}
                    </Button>
                    <Button
                        variant={activeView === 'skills' ? 'default' : 'outline'}
                        size="lg"
                        onClick={() => setActiveView('skills')}
                        className="gap-2"
                    >
                        <Search className="w-4 h-4" />
                        {t.about.skills}
                    </Button>
                </div>

                {activeView === 'about' && (
                    <Reveal visibleClassName="animate-in fade-in slide-in-from-bottom duration-500">
                        <div className="animate-in fade-in slide-in-from-bottom duration-500">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-foreground">{t.about.hello}</h3>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {t.about.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-card rounded-lg border shadow-sm">
                                        <div className="text-sm text-primary font-semibold mb-2">2023 - Presente</div>
                                        <h6 className="font-bold text-lg mb-2">Freelance Developer</h6>
                                        <p className="text-muted-foreground">{t.about.freelance}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )}

                {activeView === 'skills' && (
                    <Reveal visibleClassName="animate-in fade-in slide-in-from-bottom duration-500">
                        <div className="animate-in fade-in slide-in-from-bottom duration-500">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div>
                                        <h5 className="text-xl font-bold mb-4 text-foreground">SOFT SKILLS</h5>
                                        <div className="flex flex-wrap gap-4">
                                            {skills.softSkills.map((skill) => (
                                                <img
                                                    key={skill.name}
                                                    src={skill.img}
                                                    alt={skill.name}
                                                    title={skill.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-xl font-bold mb-4 text-foreground">CLOUD</h5>
                                        <div className="flex flex-wrap gap-4">
                                            {skills.cloud.map((skill) => (
                                                <img
                                                    key={skill.name}
                                                    src={skill.img}
                                                    alt={skill.name}
                                                    title={skill.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-xl font-bold mb-4 text-foreground">DEVELOPMENT SKILLS</h5>
                                        <div className="flex flex-wrap gap-4">
                                            {skills.development.map((skill) => (
                                                <img
                                                    key={skill.name}
                                                    src={skill.img}
                                                    alt={skill.name}
                                                    title={skill.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-xl font-bold mb-4 text-foreground">TOOLS</h5>
                                        <div className="flex flex-wrap gap-4">
                                            {skills.tools.map((skill) => (
                                                <img
                                                    key={skill.name}
                                                    src={skill.img}
                                                    alt={skill.name}
                                                    title={skill.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Tabs defaultValue="education" className="w-full">
                                        <TabsList className="grid w-full grid-cols-3">
                                            <TabsTrigger value="education">{t.about.education}</TabsTrigger>
                                            <TabsTrigger value="certificates">{t.about.certificates}</TabsTrigger>
                                            <TabsTrigger value="certifications">{t.about.certifications}</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="education" className="space-y-4 mt-6">
                                            {education.map((item, index) => (
                                                <div key={index} className="p-4 bg-card rounded-lg border">
                                                    <h5 className="font-bold text-lg">{item.title}</h5>
                                                    <hr className="my-2 border-primary" />
                                                    <p className="text-sm text-primary mb-1">{item.period}</p>
                                                    <h6 className="text-muted-foreground">{item.institution}</h6>
                                                </div>
                                            ))}
                                        </TabsContent>

                                        <TabsContent value="certificates" className="space-y-4 mt-6">
                                            {certificates.map((item, index) => (
                                                <div key={index} className="p-4 bg-card rounded-lg border">
                                                    <h5 className="font-bold">{item.title}</h5>
                                                    <hr className="my-2 border-primary" />
                                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                                    <h6 className="text-muted-foreground">{item.institution}</h6>
                                                </div>
                                            ))}
                                        </TabsContent>

                                        <TabsContent value="certifications" className="space-y-4 mt-6">
                                            {certifications.map((item, index) => (
                                                <div key={index} className="p-4 bg-card rounded-lg border">
                                                    <h5 className="font-bold">{item.title}</h5>
                                                    <hr className="my-2 border-primary" />
                                                    <p className="text-sm text-primary mb-1">{item.year}</p>
                                                    <h6 className="text-muted-foreground">{item.institution}</h6>
                                                </div>

                                            ))}
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )}
            </div>
        </section>
    );
}