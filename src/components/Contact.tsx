import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Instagram, Youtube, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { translations } from '@/lib/i18n';
import { Reveal } from '@/hooks/use-reveal';

interface ContactProps {
    t: typeof translations.pt;
}

export default function Contact({ t }: ContactProps) {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                'default_service',
                'template_gjog8lf',
                formData,
                'Jwl5C58dg568Qdylf'
            );
            setStatus('sent');
            setFormData({ from_name: '', from_email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/juni0r.s0uza/',
            color: 'hover:text-pink-500',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/wilson-souza-junior/',
            color: 'hover:text-blue-600',
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/wilsondesouza',
            color: 'hover:text-gray-900 dark:hover:text-gray-100',
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://www.youtube.com/@wilsonsouza7720',
            color: 'hover:text-red-600',
        },
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-muted/30">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        {t.nav.contact}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                <Reveal visibleClassName="animate-in fade-in slide-in-from-bottom">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <Card>
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                                            {t.contact.name}
                                        </label>
                                        <Input
                                            id="from_name"
                                            required
                                            value={formData.from_name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, from_name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                                            {t.contact.email}
                                        </label>
                                        <Input
                                            id="from_email"
                                            type="email"
                                            required
                                            value={formData.from_email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, from_email: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            {t.contact.message}
                                        </label>
                                        <Textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={status === 'sending' || status === 'sent'}
                                    >
                                        {status === 'idle' && (
                                            <>
                                                <Mail className="w-4 h-4 mr-2" />
                                                {t.contact.send}
                                            </>
                                        )}
                                        {status === 'sending' && t.contact.sending}
                                        {status === 'sent' && t.contact.sent}
                                        {status === 'error' && t.contact.error}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                            <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                                                <social.icon
                                                    className={`w-8 h-8 transition-colors ${social.color}`}
                                                />
                                                <span className="text-sm font-medium">{social.name}</span>
                                            </CardContent>
                                        </Card>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}