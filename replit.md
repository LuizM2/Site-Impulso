# ImpulsoTech Website Clone

## Overview
Este projeto é um clone do site ImpulsoTech originalmente criado no Figma. O site é uma landing page profissional para uma empresa de tecnologia no-code e automatizações.

## Project Structure
- `index.html` - Página principal com todo o conteúdo HTML
- `servicos.html` - Página de portfólio de serviços
- `ia.html` - Página dedicada ao Impulso Core (soluções de IA)
- `servico-apps.html` - Página de detalhes: Desenvolvimento de Apps
- `servico-automacoes.html` - Página de detalhes: Automações
- `servico-consultoria.html` - Página de detalhes: Consultoria
- `servico-integracoes.html` - Página de detalhes: Integrações
- `servico-paineis.html` - Página de detalhes: Painéis
- `servico-self-hosted.html` - Página de detalhes: Self-Hosted
- `politica_privacidade.html` - Página de Política de Privacidade (LGPD/Google compliant)
- `termos_de_uso.html` - Página de Termos de Uso
- `style.css` - Estilos CSS com design responsivo
- `script.js` - JavaScript para interatividade (menu mobile, scroll suave, formulário)
- `attached_assets/` - Assets e informações do Figma original

## Design System
- **Cores:**
  - Background: #0A0A0F (escuro)
  - Accent Purple: #8B5CF6
  - Accent Cyan: #22D3EE
  - Text Secondary: #94A3B8
- **Fontes:**
  - Headings: Space Grotesk
  - Body: Inter

## Features
- Design responsivo (mobile-first)
- Menu mobile com toggle
- Scroll suave para âncoras
- Carrossel infinito de logos
- Formulário de contato integrado com WhatsApp
- Animações de entrada nos cards

## Running the Project
O projeto roda com `static-web-server` na porta 5000.

## Deployment
- Tipo: Static site
- Build: copia todos os *.html, *.css, *.js, *.png e images/ para public/
- Diretório público: public/

## Recent Changes
- 03/02/2026: Páginas institucionais criadas
  - Política de Privacidade (politica_privacidade.html) - Compatível com LGPD e requisitos Google
  - Termos de Uso (termos_de_uso.html) - Termos completos de uso do site
  - Links adicionados no footer do site principal
- 03/02/2026: Easter eggs para desenvolvedores
  - Console logs com ASCII art, mensagens divertidas e informações de contratação
  - Comentários humorísticos espalhados pelo código (JS e CSS)
- 02/02/2026: Renomeação de "Sistema Impulso" para "Impulso Studio"
  - Links clicáveis para https://studio.impulsotech.dev
  - Nova logo "Impulso Tech" aplicada
- 02/02/2026: Integração do diferencial "Impulso Studio"
  - Badge "🚀 Powered by Impulso Studio" no hero section
  - Nova linha destacada na tabela comparativa: "Ferramenta própria de gestão"
  - Texto de impacto após a tabela: "+66.000 linhas de código"
  - Carrossel de ferramentas simplificado para texto (Bubble, Wappler, Lovable)
- 02/02/2026: Revisão completa de textos com base em documento de copywriting profissional
  - Nova headline: "Seu app no ar em semanas, não meses. Com código profissional."
  - Subtítulo com vibe coding e entrega 3x mais rápida
  - CTA atualizado: "AGENDAR CONVERSA DE 15 MIN"
  - Seção de metodologia com novo título e texto sem repetições
  - Cards de serviços com descrições mais diferenciadas
  - Tabela comparativa reformulada para 3 colunas (ImpulsoTech vs Agências vs Freelancers)
  - Descrições da equipe simplificadas
  - Nova seção de métricas/prova social (+40 projetos, 12 clientes, 3x mais rápido, 100% documentação)
- 02/02/2026: Criação inicial do clone do site Figma
