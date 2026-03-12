# Relatorio de auditoria i18n (revisao)

## Escopo
- Arquivo principal: `i18n-translations.js`
- Arquivo de apoio/overrides: `script.js` (`COMMON_TEXT_TRANSLATIONS`, `TITLE_TRANSLATIONS`, `CRITICAL_TRANSLATION_OVERRIDES`)
- Idiomas: `en`, `fr`, `ja`, `zh-CN`

## Glossario minimo aplicado
- **Marca (nao traduzir):** `ImpulsoTech`, `Impulso Core`, `Supabase`, `Ollama`
- **EN (termos-chave):**
  - `Diferencial` -> `Differentiator`
  - `Acessar pagina` -> `View page`
  - `Solicitar diagnostico` -> `Request an assessment`
- **FR (termos-chave):**
  - `Quando aplicar` -> `Quand l'utiliser`
  - `Solicitar diagnostico` -> `Demander une evaluation`
  - `Stack de referencia` -> `Stack technologique de reference`
- **JA (termos-chave):**
  - `Ir para home` -> `ホームへ`
  - `Solicitar diagnostico` -> `評価を依頼`
  - `Agendar demonstracao` -> `デモを予約する`
- **zh-CN (termos-chave):**
  - `Solicitar proposta` -> `获取方案`
  - `Solicitar diagnostico` -> `申请评估`
  - `Todos os direitos reservados` -> `版权所有`

## Inconsistencias identificadas (consolidado)

### Alta
- Traducoes literais de expressoes idiomaticas (ex.: "tirar do papel").
- Traducoes de marca indevidas (ex.: `Impulso Core` traduzido).
- Erros semanticos criticos em `ja` e `zh-CN` (termos tecnicos/comerciais).

### Media
- Conflitos entre dicionarios para a mesma chave (CTA, menu, labels de formulario).
- Oscilacao de tom comercial (frases longas/literais vs CTA curta e objetiva).

### Baixa
- Diferencas de pontuacao e estilo (`WhatsApp *`, formato de data, caixa de texto legal).

## Correcoes aplicadas
- Ajustes de alta prioridade em `script.js`.
- Ajustes de alta e media prioridade em `i18n-translations.js`.
- Sincronizacao final das chaves sobrepostas entre `i18n-translations.js` e `COMMON_TEXT_TRANSLATIONS` para garantir consistencia.

## Resultado de consistencia (sobreposicao de chaves)
- `en`: 42 chaves sobrepostas, **0 conflitos**
- `fr`: 37 chaves sobrepostas, **0 conflitos**
- `ja`: 37 chaves sobrepostas, **0 conflitos**
- `zh-CN`: 37 chaves sobrepostas, **0 conflitos**

## Observacoes para revisao
- A consistencia entre dicionarios foi normalizada.
- Alguns textos ainda podem ser refinados por estilo de marca (copywriting local), mas sem conflito estrutural entre fontes de traducao.
