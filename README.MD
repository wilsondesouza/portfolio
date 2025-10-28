<div align="center">

# 💻 Portfólio

[![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-orange?style=for-the-badge)](https://portfolio-wilsondesouza.vercel.app/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🎯 Visão Geral

Bem-vindo ao meu portfólio digital! Este projeto foi desenvolvido para centralizar informações sobre minha trajetória profissional, projetos e habilidades técnicas de forma moderna e interativa. A aplicação foi construída com foco em performance, acessibilidade e experiência do usuário.

> 🚀 **[Acesse o portfólio ao vivo](https://portfolio-wilsondesouza.vercel.app/)**

---

## ✨ Funcionalidades

🌓 **Tema Dinâmico**  
- Toggle entre modo claro/escuro com persistência no `localStorage`
- Paleta de cores otimizada para reduzir fadiga visual
- Transições suaves entre temas

🌍 **Internacionalização**  
- Alternância entre Português e Inglês
- Conteúdo completamente traduzido
- Detecção automática do idioma preferido (em desenvolvimento)

📱 **Design Responsivo**  
- Mobile First - otimizado para smartphones
- Breakpoints estratégicos (425px, 768px, 1024px, 1440px)
- Imagens adaptativas por tamanho de tela
- Menu hambúrguer para navegação mobile

🎭 **Animações e Efeitos**  
- Scroll reveal com `IntersectionObserver` nativo
- Transições e micro-interações com `framer-motion`
- Carrosséis fluidos com `embla-carousel-react`
- Efeitos hover personalizados

🎨 **Componentes UI Modernos**  
- Sistema de design baseado em `shadcn/ui` e `Radix UI`
- Cards interativos de projetos
- Formulário de contato integrado com `EmailJS`
- Tooltips, dialogs e elementos acessíveis

🎯 **Navegação Inteligente**  
- Smooth scroll entre seções
- Indicadores visuais de seção ativa
- Botão "Voltar ao topo" com detecção de scroll

---

## 🛠️ Stack Tecnológica

### Core
- **React 19.1.1** - Biblioteca para construção da UI
- **TypeScript 5.5.3** - Superset JavaScript com tipagem estática
- **Vite 5.4.1** - Build tool e dev server ultrarrápido

### Estilização
- **Tailwind CSS 3.4.11** - Framework CSS utility-first
- **tailwindcss-animate** - Utilitários de animação
- **class-variance-authority** - Gerenciamento de variantes de componentes
- **clsx + tailwind-merge** - Composição inteligente de classes

### UI Components
- **shadcn/ui** - Coleção de componentes reutilizáveis
- **Radix UI** - Primitivos acessíveis e sem estilos
- **Lucide React** - Ícones modernos e consistentes
- **embla-carousel-react** - Carrossel performático

### Formulários e Validação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Schema validation TypeScript-first
- **EmailJS** - Envio de emails sem backend

### Animações
- **Framer Motion** - Biblioteca de animações declarativas
- **IntersectionObserver API** - Scroll reveal nativo

### Outros
- **React Router DOM** - Roteamento client-side
- **Zustand** - Gerenciamento de estado global
- **next-themes** - Sistema de temas

---

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/          # Componentes React
│   │   ├── About.tsx        # Seção sobre mim
│   │   ├── Contact.tsx      # Formulário de contato
│   │   ├── Hero.tsx         # Seção inicial com carrossel
│   │   ├── Projects.tsx     # Showcase de projetos
│   │   └── ui/              # Componentes shadcn/ui
│   ├── hooks/               # Custom hooks
│   │   ├── use-mobile.tsx   # Detecção de viewport mobile
│   │   ├── use-reveal.tsx   # Hook de scroll reveal
│   │   └── use-toast.ts     # Sistema de notificações
│   ├── lib/                 # Utilitários e configurações
│   │   ├── i18n.ts          # Internacionalização
│   │   ├── theme.ts         # Configuração de temas
│   │   └── utils.ts         # Funções auxiliares
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.tsx        # Página principal
│   │   └── NotFound.tsx     # Página 404
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais e Tailwind
├── assets/                  # Assets estáticos
│   ├── curriculum/          # CVs em PT e EN
│   └── images/              # Imagens do projeto
├── public/                  # Arquivos públicos
├── components.json          # Configuração shadcn/ui
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── vite.config.ts           # Configuração Vite
```

---

## � Como Executar Localmente

### Pré-requisitos
- **Node.js** 18+ e npm/pnpm instalado
- Git para clonar o repositório

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/wilsondesouza/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**  
   *O projeto usa `pnpm` como gerenciador de pacotes:*
   ```bash
   pnpm install
   ```
   *Ou use npm/yarn:*
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure variáveis de ambiente (opcional)**  
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção

```bash
pnpm build
pnpm preview  # Preview da build
```

---

## 🎨 Customização

### Temas
Edite o arquivo `src/index.css` para personalizar as cores do tema:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
```

### Traduções
Adicione ou modifique textos em `src/lib/i18n.ts`:

```typescript
export const translations = {
  pt: { /* ... */ },
  en: { /* ... */ }
};
```

---

## 📦 Dependências Principais

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| react | ^19.1.1 | Biblioteca UI |
| typescript | ^5.5.3 | Superset JavaScript |
| tailwindcss | ^3.4.11 | Framework CSS |
| @radix-ui/* | ^1.x | Primitivos UI acessíveis |
| framer-motion | ^11.0.0 | Animações |
| embla-carousel-react | ^8.6.0 | Carrossel |
| @emailjs/browser | ^4.4.1 | Envio de emails |
| react-hook-form | ^7.53.0 | Formulários |
| zod | ^3.23.8 | Validação de schemas |

---

## 📧 Contato

**Wilson de Souza Júnior**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Wilson%20Souza-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/wilson-souza-junior/)
[![GitHub](https://img.shields.io/badge/GitHub-wilsondesouza-181717?style=flat&logo=github)](https://github.com/wilsondesouza)
[![Email](https://img.shields.io/badge/Email-wilsonsjunior%40outlook.com-D14836?style=flat&logo=gmail)](mailto:wilsonsjunior@outlook.com)

---

<div align="center">

**Desenvolvido com ❤️ e ☕ por [Wilson de Souza](https://github.com/wilsondesouza)**

</div>
