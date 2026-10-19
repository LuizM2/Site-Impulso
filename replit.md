# Impulsotech: site

## Visão geral
Site da Impulsotech, só em português, com uma promessa só: site, automação e painel para pequenas e
médias empresas, com preço fechado, prazo no contrato e um sócio responsável pela entrega.
A página `/ofertas/` é o cardápio completo em texto e também é o link que o SDR virtual usa.

## Estrutura
- `index.html`: início (ofertas, como funciona, combinado, casos, sócios, perguntas, contato)
- `ofertas/index.html`: ofertas e preços, tudo numa página
- `ofertas/site/`, `ofertas/automacao/`, `ofertas/painel/`: uma página por oferta
- `politica_privacidade.html`, `termos_de_uso.html`: páginas legais (mesmos endereços de antes)
- `servicos.html`, `servico-*.html`, `ia.html`: redirecionam para a oferta equivalente
- `site.css`, `site.js`: estilo e comportamento de todas as páginas
- `robots.txt`, `sitemap.xml`, `404.html`

## Onde mudar
- Preços, prazos e escopos aparecem em `index.html`, `ofertas/index.html` e nas três páginas de oferta.
  Mudou um, confira os outros quatro (`grep -rn "R\$" --include=*.html .`).
- Número de WhatsApp que recebe os contatos: constante `WHATSAPP` em `site.js`, e o número visível em
  `index.html` e no rodapé das páginas.

## Identidade
- Fundo #0A0A0F, roxo #8B5CF6, ciano #22D3EE; títulos em Space Grotesk, texto em Inter.
- Imagens em WebP dentro de `images/`; `images/og-impulsotech.png` é a imagem de compartilhamento.

## Rodar e publicar
- Local: `static-web-server --host 0.0.0.0 --port 5000 --root .`
- Deploy estático: `python3 scripts/build_public.py` monta `public/` (sem rotas por idioma).
