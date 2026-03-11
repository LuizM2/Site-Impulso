console.log("%c🚀 ImpulsoTech", "font-size: 48px; font-weight: bold; background: linear-gradient(135deg, #8B5CF6, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent;");

console.log(`%c
    ▄▄▄▄▄▄▄
   ▐░░░░░░░▌
   ▐░█▀▀▀█░▌
   ▐░▌   ▐░▌
   ▐░█▄▄▄█░▌
   ▐░░░░░░░▌
   ▐░▌   ▐░▌
  ▄▀░▌   ▐░▀▄
 ▐░░░▌   ▐░░░▌
  ▀▄▄▀   ▀▄▄▀
`, "color: #8B5CF6; font-family: monospace;");

console.log("%c👀 Curioso, hein?", "font-size: 18px; color: #22D3EE; font-weight: bold;");
console.log("%cSe você está aqui, provavelmente é dev... ou muito curioso!", "font-size: 14px; color: #94A3B8;");
console.log("%c💼 Estamos contratando!", "font-size: 16px; color: #10B981; font-weight: bold;");
console.log("%cManda um oi: contato@impulsotech.dev", "font-size: 14px; color: #94A3B8;");
console.log("%c⚠️ Aviso:", "font-size: 14px; color: #F59E0B; font-weight: bold;");
console.log("%cSe veio tentar copiar, relaxa... o código é bonito, mas a mágica está na execução. 😉", "font-size: 12px; color: #94A3B8;");
console.log("%c🔧 Stack:", "font-size: 14px; color: #8B5CF6; font-weight: bold;");
console.log("%cHTML + CSS + JS puro. Às vezes, menos é mais.", "font-size: 12px; color: #94A3B8;");
console.log("%c───────────────────────────────", "color: #374151;");

const SUPPORTED_LOCALES = ["pt-BR", "en", "fr", "ja", "zh-CN"];
const LOCALE_STORAGE_KEY = "impulsotech_locale";
const LOCALE_LABELS = {
    "pt-BR": "Português",
    en: "English",
    fr: "Français",
    ja: "日本語",
    "zh-CN": "中文(简体)"
};

const TITLE_TRANSLATIONS = {
    "ImpulsoTech - Tecnologia No-Code e Automatizações": {
        en: "ImpulsoTech - No-Code Technology and Automations",
        fr: "ImpulsoTech - Technologie No-Code et Automatisations",
        ja: "ImpulsoTech - ノーコード技術と自動化",
        "zh-CN": "ImpulsoTech - 无代码技术与自动化"
    },
    "Serviços | ImpulsoTech": {
        en: "Services | ImpulsoTech",
        fr: "Services | ImpulsoTech",
        ja: "サービス | ImpulsoTech",
        "zh-CN": "服务 | ImpulsoTech"
    },
    "Impulso Core | IA Corporativa Local": {
        en: "Impulso Core | Local Enterprise AI",
        fr: "Impulso Core | IA d'entreprise locale",
        ja: "Impulso Core | ローカル企業向けAI",
        "zh-CN": "Impulso Core | 本地企业AI"
    },
    "Criação de Aplicativos | ImpulsoTech": {
        en: "App Development | ImpulsoTech",
        fr: "Développement d'applications | ImpulsoTech",
        ja: "アプリ開発 | ImpulsoTech",
        "zh-CN": "应用开发 | ImpulsoTech"
    },
    "Automação de Processos | ImpulsoTech": {
        en: "Process Automation | ImpulsoTech",
        fr: "Automatisation des processus | ImpulsoTech",
        ja: "プロセス自動化 | ImpulsoTech",
        "zh-CN": "流程自动化 | ImpulsoTech"
    },
    "Consultoria Estratégica | ImpulsoTech": {
        en: "Strategic Consulting | ImpulsoTech",
        fr: "Conseil stratégique | ImpulsoTech",
        ja: "戦略コンサルティング | ImpulsoTech",
        "zh-CN": "战略咨询 | ImpulsoTech"
    },
    "Integração de Sistemas | ImpulsoTech": {
        en: "Systems Integration | ImpulsoTech",
        fr: "Intégration de systèmes | ImpulsoTech",
        ja: "システム統合 | ImpulsoTech",
        "zh-CN": "系统集成 | ImpulsoTech"
    },
    "Painéis e Relatórios | ImpulsoTech": {
        en: "Dashboards and Reports | ImpulsoTech",
        fr: "Tableaux de bord et rapports | ImpulsoTech",
        ja: "ダッシュボードとレポート | ImpulsoTech",
        "zh-CN": "仪表板与报告 | ImpulsoTech"
    },
    "Servidores Self-Hosted | ImpulsoTech": {
        en: "Self-Hosted Servers | ImpulsoTech",
        fr: "Serveurs auto-hébergés | ImpulsoTech",
        ja: "セルフホストサーバー | ImpulsoTech",
        "zh-CN": "自托管服务器 | ImpulsoTech"
    },
    "Política de Privacidade - ImpulsoTech": {
        en: "Privacy Policy - ImpulsoTech",
        fr: "Politique de confidentialité - ImpulsoTech",
        ja: "プライバシーポリシー - ImpulsoTech",
        "zh-CN": "隐私政策 - ImpulsoTech"
    },
    "Termos de Uso - ImpulsoTech": {
        en: "Terms of Use - ImpulsoTech",
        fr: "Conditions d'utilisation - ImpulsoTech",
        ja: "利用規約 - ImpulsoTech",
        "zh-CN": "使用条款 - ImpulsoTech"
    }
};

const UI_TRANSLATIONS = {
    "language.label": {
        "pt-BR": "Idioma",
        en: "Language",
        fr: "Langue",
        ja: "言語",
        "zh-CN": "语言"
    },
    "form.sending": {
        "pt-BR": "Enviando...",
        en: "Sending...",
        fr: "Envoi...",
        ja: "送信中...",
        "zh-CN": "发送中..."
    },
    "form.success": {
        "pt-BR": "Enviado com sucesso!",
        en: "Sent successfully!",
        fr: "Envoyé avec succès !",
        ja: "送信に成功しました！",
        "zh-CN": "发送成功！"
    },
    "form.error": {
        "pt-BR": "Erro ao enviar",
        en: "Failed to send",
        fr: "Erreur lors de l'envoi",
        ja: "送信エラー",
        "zh-CN": "发送失败"
    }
};

const GOOGLE_LOCALE_MAP = {
    "pt-BR": "pt",
    en: "en",
    fr: "fr",
    ja: "ja",
    "zh-CN": "zh-CN"
};

const COMMON_TEXT_TRANSLATIONS = {
    en: {
        "Serviços": "Services",
        "Diferencial": "Differential",
        "Galeria": "Gallery",
        "Comparativo": "Comparison",
        "Portfólio de Serviços": "Services Portfolio",
        "Como funciona": "How it works",
        "Entre em contato": "Contact us",
        "Política de Privacidade": "Privacy Policy",
        "Termos de Uso": "Terms of Use",
        "← Voltar para o início": "← Back to home",
        "Acessar página": "Open page",
        "Solicitar proposta": "Request proposal",
        "Voltar para serviços": "Back to services",
        "Falar com especialista": "Talk to a specialist",
        "Ir para home": "Go to home",
        "Quando aplicar": "When to apply",
        "O que entregamos": "What we deliver",
        "Resultado esperado": "Expected outcome",
        "Stack de referência": "Reference stack",
        "Processo de trabalho": "Work process",
        "Impulso Core": "Impulso Core",
        "Catálogo de serviços": "Service catalog",
        "Destaque estratégico": "Strategic highlight",
        "Explorar serviços": "Explore services",
        "Solicitar diagnóstico": "Request diagnosis",
        "Ver página da solução de IA": "See AI solution page",
        "Pronto para lançar seu próximo produto digital?": "Ready to launch your next digital product?",
        "Quer automatizar processos sem perder controle?": "Want to automate processes without losing control?",
        "Quer visibilidade real da operação?": "Want real visibility of your operations?",
        "Quer integrar seus sistemas sem interromper a operação?": "Want to integrate your systems without interrupting operations?",
        "Quer infraestrutura própria sem complexidade desnecessária?": "Want your own infrastructure without unnecessary complexity?",
        "Quer direcionamento técnico com visão de negócio?": "Want technical direction with business vision?",
        "Última atualização: 03 de fevereiro de 2026": "Last updated: February 03, 2026",
        "Política de Privacidade": "Privacy Policy",
        "Termos de Uso": "Terms of Use",
        "Nome completo *": "Full name *",
        "Email *": "Email *",
        "WhatsApp *": "WhatsApp *",
        "Qual seu maior desafio tecnológico hoje? *": "What is your biggest technology challenge today? *",
        "Enviar Solicitação": "Send Request",
        "Todos os direitos reservados": "All rights reserved",
        "Ver todos os serviços": "See all services",
        "Comparar todos os serviços": "Compare all services",
        "Conhecer Impulso Core": "Discover Impulso Core"
    },
    fr: {
        "Serviços": "Services",
        "Diferencial": "Différentiel",
        "Galeria": "Galerie",
        "Comparativo": "Comparatif",
        "Portfólio de Serviços": "Portefeuille de services",
        "Como funciona": "Comment ça marche",
        "Entre em contato": "Nous contacter",
        "Política de Privacidade": "Politique de confidentialité",
        "Termos de Uso": "Conditions d'utilisation",
        "← Voltar para o início": "← Retour à l'accueil",
        "Acessar página": "Accéder à la page",
        "Solicitar proposta": "Demander une proposition",
        "Voltar para serviços": "Retour aux services",
        "Falar com especialista": "Parler à un spécialiste",
        "Ir para home": "Aller à l'accueil",
        "Quando aplicar": "Quand appliquer",
        "O que entregamos": "Ce que nous livrons",
        "Resultado esperado": "Résultat attendu",
        "Stack de referência": "Stack de référence",
        "Processo de trabalho": "Processus de travail",
        "Impulso Core": "Impulso Core",
        "Catálogo de serviços": "Catalogue de services",
        "Destaque estratégico": "Point stratégique",
        "Explorar serviços": "Explorer les services",
        "Solicitar diagnóstico": "Demander un diagnostic",
        "Ver página da solução de IA": "Voir la page de la solution IA",
        "Pronto para lançar seu próximo produto digital?": "Prêt à lancer votre prochain produit numérique ?",
        "Última atualização: 03 de fevereiro de 2026": "Dernière mise à jour : 03 février 2026",
        "Nome completo *": "Nom complet *",
        "Email *": "E-mail *",
        "WhatsApp *": "WhatsApp *",
        "Qual seu maior desafio tecnológico hoje? *": "Quel est votre plus grand défi technologique aujourd'hui ? *",
        "Enviar Solicitação": "Envoyer la demande",
        "Todos os direitos reservados": "Tous droits réservés",
        "Ver todos os serviços": "Voir tous les services",
        "Comparar todos os serviços": "Comparer tous les services",
        "Conhecer Impulso Core": "Découvrir Impulso Core"
    },
    ja: {
        "Serviços": "サービス",
        "Diferencial": "強み",
        "Galeria": "ギャラリー",
        "Comparativo": "比較",
        "Portfólio de Serviços": "サービス一覧",
        "Como funciona": "仕組み",
        "Entre em contato": "お問い合わせ",
        "Política de Privacidade": "プライバシーポリシー",
        "Termos de Uso": "利用規約",
        "← Voltar para o início": "← トップに戻る",
        "Acessar página": "ページを見る",
        "Solicitar proposta": "提案を依頼",
        "Voltar para serviços": "サービスへ戻る",
        "Falar com especialista": "専門家に相談",
        "Ir para home": "ホームへ",
        "Quando aplicar": "適用タイミング",
        "O que entregamos": "提供内容",
        "Resultado esperado": "期待される結果",
        "Stack de referência": "参考スタック",
        "Processo de trabalho": "進行プロセス",
        "Impulso Core": "Impulso Core",
        "Catálogo de serviços": "サービスカタログ",
        "Destaque estratégico": "戦略ハイライト",
        "Explorar serviços": "サービスを見る",
        "Solicitar diagnóstico": "診断を依頼",
        "Ver página da solução de IA": "AIソリューションページを見る",
        "Pronto para lançar seu próximo produto digital?": "次のデジタルプロダクトを公開する準備はできていますか？",
        "Última atualização: 03 de fevereiro de 2026": "最終更新日: 2026年2月3日",
        "Nome completo *": "氏名 *",
        "Email *": "メール *",
        "WhatsApp *": "WhatsApp *",
        "Qual seu maior desafio tecnológico hoje? *": "現在の最大の技術課題は何ですか？ *",
        "Enviar Solicitação": "送信する",
        "Todos os direitos reservados": "無断転載を禁じます",
        "Ver todos os serviços": "すべてのサービスを見る",
        "Comparar todos os serviços": "すべてのサービスを比較",
        "Conhecer Impulso Core": "Impulso Coreを見る"
    },
    "zh-CN": {
        "Serviços": "服务",
        "Diferencial": "优势",
        "Galeria": "案例",
        "Comparativo": "对比",
        "Portfólio de Serviços": "服务组合",
        "Como funciona": "工作方式",
        "Entre em contato": "联系我们",
        "Política de Privacidade": "隐私政策",
        "Termos de Uso": "使用条款",
        "← Voltar para o início": "← 返回首页",
        "Acessar página": "查看页面",
        "Solicitar proposta": "申请方案",
        "Voltar para serviços": "返回服务页",
        "Falar com especialista": "咨询专家",
        "Ir para home": "前往首页",
        "Quando aplicar": "适用场景",
        "O que entregamos": "交付内容",
        "Resultado esperado": "预期结果",
        "Stack de referência": "参考技术栈",
        "Processo de trabalho": "工作流程",
        "Impulso Core": "Impulso Core",
        "Catálogo de serviços": "服务目录",
        "Destaque estratégico": "战略亮点",
        "Explorar serviços": "浏览服务",
        "Solicitar diagnóstico": "申请诊断",
        "Ver página da solução de IA": "查看 AI 方案页面",
        "Pronto para lançar seu próximo produto digital?": "准备发布你的下一个数字产品了吗？",
        "Última atualização: 03 de fevereiro de 2026": "最后更新：2026年2月3日",
        "Nome completo *": "姓名 *",
        "Email *": "邮箱 *",
        "WhatsApp *": "WhatsApp *",
        "Qual seu maior desafio tecnológico hoje? *": "你当前最大的技术挑战是什么？ *",
        "Enviar Solicitação": "提交申请",
        "Todos os direitos reservados": "保留所有权利",
        "Ver todos os serviços": "查看所有服务",
        "Comparar todos os serviços": "对比所有服务",
        "Conhecer Impulso Core": "了解 Impulso Core"
    }
};

let currentLocale = "pt-BR";
const STATIC_TRANSLATIONS = window.I18N_STATIC_TRANSLATIONS || {};
const NORMALIZED_STATIC_TRANSLATIONS = {};
const NON_TRANSLATABLE_TERMS = new Set([
    "Bubble",
    "Bubble.io",
    "Wappler",
    "Lovable",
    "Cursor",
    "Claude Code",
    "Ubuntu",
    "OpenAI",
    "Supabase",
    "Docker",
    "n8n",
    "Ollama",
    "GitHub",
    "Oracle",
    "Cloudflare",
    "PostgreSQL",
    "MySQL",
    "Neon SQL",
    "NeonSQL",
    "Replit",
    "ImpulsoTech",
    "Impulso Core",
    "Melhor Pix",
    "Emply",
    "Afon",
    "Sysbot",
    "FIPS",
    "Nooklead",
    "Luiz Melo",
    "Álvaro Medeiros",
    "Kevin Arend",
    "Erivanildo Martiniano",
    "Fellipe Lope"
]);
const PROTECTED_TERMS = [
    {
        canonical: "Docker",
        variants: ["Docker", "docker", "码头工人", "ドッカー", "Dockerisé", "Docker化"]
    },
    {
        canonical: "Docker Swarm",
        variants: ["Docker Swarm", "Docker群", "码头工人群", "ドッカー スウォーム", "Essaim Docker"]
    },
    {
        canonical: "Ollama",
        variants: ["Ollama", "你好", "オーラマ", "奥拉马"]
    },
    {
        canonical: "Supabase",
        variants: ["Supabase", "SUpabase", "超库", "スーパー ベース", "超基座", "苏帕贝斯", "スーパーベース"]
    },
    {
        canonical: "PostgreSQL",
        variants: ["PostgreSQL", "ポストグレSQL", "后SQL", "Postgre Sql", "Postgres SQL"]
    },
    {
        canonical: "N8N",
        variants: ["N8N", "n8n"]
    },
    {
        canonical: "Open WebUI",
        variants: ["Open WebUI", "开放网络用户界面", "开放式Web用户界面", "オープンウェブUI"]
    },
    {
        canonical: "LangChain / RAG",
        variants: ["LangChain / RAG", "浪链/RAG", "ラングチェーン/RAG", "Chaîne linguistique / RAG"]
    },
    {
        canonical: "Melhor Pix",
        variants: ["Melhor Pix", "Meilleure photo", "更好的像素", "ベストピックス"]
    },
    {
        canonical: "Emply",
        variants: ["Emply"]
    },
    {
        canonical: "Afon",
        variants: ["Afon"]
    },
    {
        canonical: "Sysbot",
        variants: ["Sysbot", "Bot système", "系统机器人", "シスボット"]
    }
];

function getUiText(key, locale) {
    const dictionary = UI_TRANSLATIONS[key];
    if (!dictionary) return key;
    return dictionary[locale] || dictionary["pt-BR"];
}

function mapNavigatorLocale() {
    const locales = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "pt-BR"];
    const preferred = locales[0].toLowerCase();
    if (preferred.startsWith("pt")) return "pt-BR";
    if (preferred.startsWith("en")) return "en";
    if (preferred.startsWith("fr")) return "fr";
    if (preferred.startsWith("ja")) return "ja";
    if (preferred.startsWith("zh")) return "zh-CN";
    return "pt-BR";
}

function getInitialLocale() {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
    return mapNavigatorLocale();
}

function localizeTitle(locale) {
    const originalTitle = document.title;
    const dictionary = TITLE_TRANSLATIONS[originalTitle];
    if (!dictionary || locale === "pt-BR") return;
    const translated = dictionary[locale];
    if (translated) document.title = translated;
}

function enforceProtectedTerms(text) {
    if (!text) return text;
    let output = text;

    PROTECTED_TERMS.forEach(({ canonical, variants }) => {
        variants.forEach((variant) => {
            if (!variant || variant === canonical) return;
            output = output.replaceAll(variant, canonical);
        });
    });

    return output;
}

function normalizeI18nText(text) {
    return (text || "").replace(/\s+/g, " ").trim();
}

function getStaticTranslation(locale, text) {
    const localeTable = STATIC_TRANSLATIONS[locale];
    if (!localeTable) return null;

    const direct = localeTable[text];
    if (direct) return direct;

    if (!NORMALIZED_STATIC_TRANSLATIONS[locale]) {
        const normalizedMap = new Map();
        Object.entries(localeTable).forEach(([sourceText, translatedText]) => {
            const normalizedSource = normalizeI18nText(sourceText);
            if (normalizedSource && !normalizedMap.has(normalizedSource)) {
                normalizedMap.set(normalizedSource, translatedText);
            }
        });
        NORMALIZED_STATIC_TRANSLATIONS[locale] = normalizedMap;
    }

    const normalizedInput = normalizeI18nText(text);
    return NORMALIZED_STATIC_TRANSLATIONS[locale].get(normalizedInput) || null;
}

function enforceProtectedTermsInDom() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const original = node.textContent || "";
        const normalized = enforceProtectedTerms(original);
        if (normalized !== original) {
            node.textContent = normalized;
        }
    }

    ["placeholder", "aria-label", "title", "alt", "value", "data-title"].forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
            const original = el.getAttribute(attr) || "";
            const normalized = enforceProtectedTerms(original);
            if (normalized !== original) {
                el.setAttribute(attr, normalized);
            }
        });
    });
}

function translateStaticText(text, locale) {
    if (!text || locale === "pt-BR") return text;
    if (NON_TRANSLATABLE_TERMS.has(text)) return text;
    const translated =
        getStaticTranslation(locale, text) ||
        COMMON_TEXT_TRANSLATIONS[locale]?.[text] ||
        COMMON_TEXT_TRANSLATIONS[locale]?.[normalizeI18nText(text)] ||
        text;
    return enforceProtectedTerms(translated);
}

function localizeAttributes(locale) {
    const attrs = ["placeholder", "aria-label", "title", "alt", "value", "data-title"];
    const getAttrDatasetKey = (attr) => `i18nOriginalAttr${attr.replace(/[^a-zA-Z0-9]/g, "_")}`;

    attrs.forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
            const key = getAttrDatasetKey(attr);
            if (!el.dataset[key]) {
                el.dataset[key] = el.getAttribute(attr) || "";
            }
            const source = el.dataset[key];
            el.setAttribute(attr, translateStaticText(source, locale));
        });
    });
}

const _i18nTextNodeOriginals = new WeakMap();

function localizeTextNodes(locale) {
    if (locale === "pt-BR") {
        restoreOriginalTexts();
        return;
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (!node.parentElement) continue;
        const parentTag = node.parentElement.tagName.toLowerCase();
        if (["script", "style", "noscript"].includes(parentTag)) continue;

        const raw = node.textContent || "";
        const trimmed = raw.trim();
        if (!trimmed) continue;

        if (!_i18nTextNodeOriginals.has(node)) {
            _i18nTextNodeOriginals.set(node, trimmed);
        }

        const source = _i18nTextNodeOriginals.get(node);
        const translated = translateStaticText(source, locale);
        const leading = raw.match(/^\s*/)?.[0] || "";
        const trailing = raw.match(/\s*$/)?.[0] || "";
        node.textContent = `${leading}${translated}${trailing}`;
    }

    localizeAttributes(locale);
}

function restoreOriginalTexts() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (!_i18nTextNodeOriginals.has(node)) continue;
        const original = _i18nTextNodeOriginals.get(node);
        const raw = node.textContent || "";
        const leading = raw.match(/^\s*/)[0];
        const trailing = raw.match(/\s*$/)[0];
        node.textContent = `${leading}${original}${trailing}`;
    }

    const attrs = ["placeholder", "aria-label", "title", "alt", "value", "data-title"];
    const getAttrDatasetKey = (attr) => `i18nOriginalAttr${attr.replace(/[^a-zA-Z0-9]/g, "_")}`;
    attrs.forEach((attr) => {
        const originalKey = getAttrDatasetKey(attr);
        document.querySelectorAll(`[data-${originalKey}]`).forEach((el) => {
            if (el.dataset[originalKey] !== undefined) {
                el.setAttribute(attr, el.dataset[originalKey]);
            }
        });
    });
}

function createLanguageSelector() {
    const headerContent = document.querySelector(".header-content");
    if (!headerContent || headerContent.querySelector(".lang-switcher")) return;
    const nav = headerContent.querySelector(".nav");

    const wrapper = document.createElement("div");
    wrapper.className = "lang-switcher";

    const label = document.createElement("label");
    label.className = "lang-switcher-label";
    label.setAttribute("for", "lang-switcher-select");
    label.textContent = getUiText("language.label", currentLocale);

    const select = document.createElement("select");
    select.id = "lang-switcher-select";
    select.className = "lang-switcher-select";
    select.setAttribute("aria-label", getUiText("language.label", currentLocale));

    SUPPORTED_LOCALES.forEach((locale) => {
        const option = document.createElement("option");
        option.value = locale;
        option.textContent = LOCALE_LABELS[locale];
        if (locale === currentLocale) option.selected = true;
        select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
        const nextLocale = event.target.value;
        setLocale(nextLocale, true);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    if (nav) {
        headerContent.insertBefore(wrapper, nav);
    } else {
        headerContent.appendChild(wrapper);
    }
}

function refreshLanguageSelectorLabel() {
    const label = document.querySelector(".lang-switcher-label");
    const select = document.querySelector(".lang-switcher-select");
    if (label) label.textContent = getUiText("language.label", currentLocale);
    if (select) {
        select.setAttribute("aria-label", getUiText("language.label", currentLocale));
        select.value = currentLocale;
    }
}

function setLocale(locale, shouldPersist) {
    if (!SUPPORTED_LOCALES.includes(locale)) return;
    currentLocale = locale;
    document.documentElement.lang = locale;
    restoreOriginalTexts();
    localizeTitle(locale);
    localizeTextNodes(locale);
    enforceProtectedTermsInDom();
    refreshLanguageSelectorLabel();
    if (shouldPersist) {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
    window.dispatchEvent(new CustomEvent("impulso:locale-changed", {
        detail: { locale: currentLocale }
    }));
}

function initTechGridMagnetEffect() {
    const techGrid = document.querySelector(".tech-grid");
    if (!techGrid) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const techCards = Array.from(techGrid.querySelectorAll(".tech-card"));
    if (!techCards.length) return;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const getRadius = () => (window.innerWidth <= 768 ? 170 : 220);

    const state = {
        pointerX: 0,
        pointerY: 0,
        active: false,
        radius: getRadius(),
        rafId: null,
        cards: techCards.map((card) => ({
            card,
            cx: 0,
            cy: 0,
            current: 0,
            target: 0,
            glowRgb: "34 211 238"
        }))
    };

    function parseGlowColor(card) {
        const badge = card.querySelector(".tech-badge");
        const inlineStyle = badge ? (badge.getAttribute("style") || "") : "";
        const matches = inlineStyle.match(/#[0-9a-fA-F]{3,8}/g);
        if (matches && matches.length) {
            return matches[matches.length - 1];
        }
        return "#22D3EE";
    }

    function hexToRgbString(hex) {
        if (!hex) return "34 211 238";
        const normalized = hex.replace("#", "").trim();
        const isShort = normalized.length === 3;
        const isLong = normalized.length >= 6;
        if (!isShort && !isLong) return "34 211 238";

        const r = parseInt(isShort ? normalized[0] + normalized[0] : normalized.slice(0, 2), 16);
        const g = parseInt(isShort ? normalized[1] + normalized[1] : normalized.slice(2, 4), 16);
        const b = parseInt(isShort ? normalized[2] + normalized[2] : normalized.slice(4, 6), 16);

        if ([r, g, b].some((value) => Number.isNaN(value))) {
            return "34 211 238";
        }

        return `${r} ${g} ${b}`;
    }

    state.cards.forEach((entry) => {
        const glowHex = parseGlowColor(entry.card);
        entry.glowRgb = hexToRgbString(glowHex);
        entry.card.style.setProperty("--glow-rgb", entry.glowRgb);
        entry.card.style.setProperty("--proximity", "0");
        entry.card.style.setProperty("--scale", "1");
        entry.card.style.setProperty("--lift", "0px");
        entry.card.style.setProperty("--logo-brightness", "1");
        entry.card.style.setProperty("--halo-alpha", "0");
    });

    function recalcCardCenters() {
        state.radius = getRadius();
        state.cards.forEach((entry) => {
            const rect = entry.card.getBoundingClientRect();
            entry.cx = rect.left + rect.width / 2;
            entry.cy = rect.top + rect.height / 2;
        });
    }

    function applyVisual(entry) {
        const influence = clamp(entry.current, 0, 1);
        const scale = 1 + influence * 0.12;
        const lift = influence * 8;
        const brightness = 1 + influence * 0.35;
        const halo = influence * 0.7;

        entry.card.style.setProperty("--proximity", influence.toFixed(4));
        entry.card.style.setProperty("--scale", scale.toFixed(4));
        entry.card.style.setProperty("--lift", `${lift.toFixed(3)}px`);
        entry.card.style.setProperty("--logo-brightness", brightness.toFixed(4));
        entry.card.style.setProperty("--halo-alpha", halo.toFixed(4));
    }

    function ensureAnimationLoop() {
        if (state.rafId !== null) return;
        state.rafId = requestAnimationFrame(tick);
    }

    function tick() {
        let shouldContinue = state.active;

        state.cards.forEach((entry) => {
            if (state.active) {
                const dx = state.pointerX - entry.cx;
                const dy = state.pointerY - entry.cy;
                const distance = Math.hypot(dx, dy);
                entry.target = clamp(1 - distance / state.radius, 0, 1);
            } else {
                entry.target = 0;
            }

            const delta = entry.target - entry.current;
            entry.current += delta * 0.18;
            if (Math.abs(delta) > 0.0015) {
                shouldContinue = true;
            }

            applyVisual(entry);
        });

        if (shouldContinue) {
            state.rafId = requestAnimationFrame(tick);
        } else {
            state.rafId = null;
        }
    }

    recalcCardCenters();

    techGrid.addEventListener("pointerenter", (event) => {
        recalcCardCenters();
        state.active = true;
        state.pointerX = event.clientX;
        state.pointerY = event.clientY;
        ensureAnimationLoop();
    });

    techGrid.addEventListener("pointermove", (event) => {
        state.active = true;
        state.pointerX = event.clientX;
        state.pointerY = event.clientY;
        ensureAnimationLoop();
    }, { passive: true });

    techGrid.addEventListener("pointerleave", () => {
        state.active = false;
        ensureAnimationLoop();
    });

    window.addEventListener("resize", () => {
        recalcCardCenters();
        ensureAnimationLoop();
    }, { passive: true });

    window.addEventListener("scroll", () => {
        if (!state.active) return;
        recalcCardCenters();
        ensureAnimationLoop();
    }, { passive: true });
}

document.addEventListener("DOMContentLoaded", function () {
    currentLocale = getInitialLocale();
    createLanguageSelector();
    initTechGridMagnetEffect();

    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const nav = document.querySelector(".nav");

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");
            mobileMenuBtn.classList.toggle("active");
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                if (nav && mobileMenuBtn && nav.classList.contains("active")) {
                    nav.classList.remove("active");
                    mobileMenuBtn.classList.remove("active");
                }
            }
        });
    });

    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", function () {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.style.background = "rgba(10, 10, 15, 0.95)";
            } else {
                header.style.background = "rgba(10, 10, 15, 0.9)";
            }
        });
    }

    const contactForm = document.getElementById("contact-form");
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvSr5vYHexFYBC2qviZWWrFlhJJiQgar2UEc3ykROfFsNmpsSu8yNk912YR1azGa24Vg/exec";

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = getUiText("form.sending", currentLocale);
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = {
                nome: formData.get("name"),
                email: formData.get("email"),
                telefone: formData.get("whatsapp"),
                mensagem: formData.get("challenge")
            };

            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                submitBtn.textContent = getUiText("form.success", currentLocale);
                submitBtn.style.background = "linear-gradient(135deg, #10B981, #059669)";
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                }, 3000);
            } catch (error) {
                submitBtn.textContent = getUiText("form.error", currentLocale);
                submitBtn.style.background = "linear-gradient(135deg, #EF4444, #DC2626)";

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".method-card, .service-card, .team-card");
    animatedElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

    initCaseCarousel();
    setLocale(currentLocale, false);
});

function initCaseCarousel() {
    const slides = document.querySelectorAll(".case-slide");
    const badge = document.getElementById("caseBadge");
    const dotsContainer = document.getElementById("caseDots");
    const prevBtn = document.getElementById("casePrev");
    const nextBtn = document.getElementById("caseNext");

    if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return;

    let currentSlide = 0;
    let autoSlideInterval;

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("case-dot");
        if (i === 0) dot.classList.add("active");
        (function (index) {
            dot.onclick = function () { goToSlide(index); };
        })(i);
        dotsContainer.appendChild(dot);
    }

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dotsContainer.children[i].classList.remove("active");
        }
        slides[index].classList.add("active");
        dotsContainer.children[index].classList.add("active");
        if (badge) badge.textContent = slides[index].getAttribute("data-title");
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetAutoSlide();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    prevBtn.onclick = function () { prevSlide(); resetAutoSlide(); };
    nextBtn.onclick = function () { nextSlide(); resetAutoSlide(); };
    autoSlideInterval = setInterval(nextSlide, 5000);
}
