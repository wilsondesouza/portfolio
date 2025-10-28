import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    // permite sobrescrever as classes aplicadas quando visível / escondido
    visibleClassName?: string;
    hiddenClassName?: string;
};

export function Reveal({
    children,
    className = '',
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    once = true,
    visibleClassName = 'animate-in fade-in slide-in-from-bottom',
    hiddenClassName = 'opacity-0 translate-y-6',
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        if (once && el) obs.unobserve(el);
                    } else if (!once) {
                        setVisible(false);
                    }
                });
            },
            { threshold, rootMargin }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, rootMargin, once]);

    return (
        <div ref={ref} className={`${className} ${visible ? visibleClassName : hiddenClassName}`}>
            {children}
        </div>
    );
}

// Hook opcional se quiser apenas obter visibilidade (use quando precisar controlar manualmente)
export function useReveal(options?: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options || {};

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        if (once && el) obs.unobserve(el);
                    } else if (!once) {
                        setVisible(false);
                    }
                });
            },
            { threshold, rootMargin }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [options]);

    return { ref, visible };
}