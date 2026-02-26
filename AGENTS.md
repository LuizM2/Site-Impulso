# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Site estático (landing page) da ImpulsoTech — HTML/CSS/JS puro, sem framework, sem build step, sem package manager, sem testes automatizados.

### Servidor de desenvolvimento

```bash
python3 -m http.server 5000 --bind 0.0.0.0
```

O site fica acessível em `http://localhost:5000/`. Consulte `replit.md` para detalhes sobre estrutura e design system.

### Notas importantes

- **Sem lint/testes/build**: Não há ferramentas de lint, test runners ou etapas de build. Validação deve ser feita manualmente via browser.
- **Formulário de contato**: Envia para um endpoint externo do Google Apps Script. Em ambiente local, o envio do formulário depende de conectividade com a internet.
- **Imagens locais**: Algumas imagens referenciadas em `images/` podem não estar no repositório (servidas externamente ou não versionadas). Imagens de CDN externo (`files.manuscdn.com`, `booth-shield-23476833.figma.site`) requerem acesso à internet.
- **Sem dependências de sistema**: Apenas Python 3 é necessário (já presente no ambiente).
