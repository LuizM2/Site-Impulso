document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initPillarsBeam();
    initHeroCounters();
    initTypewriter();
    initHeaderBlur();
});

function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    document.querySelectorAll('.ia-stagger').forEach((group) => {
        const children = Array.from(group.querySelectorAll(':scope > .reveal'));
        children.forEach((el, index) => {
            el.style.transitionDelay = `${index * 80}ms`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((el) => observer.observe(el));
}

function initPillarsBeam() {
    const beam = document.querySelector('.ia-pillars-beam');
    const section = document.querySelector('.ia-pillars');
    if (!beam || !section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                beam.classList.add('is-active');
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(section);
}

function initHeroCounters() {
    const counters = document.querySelectorAll('.ia-counter');
    if (!counters.length) return;

    const statsSection = document.querySelector('.ia-stats');
    if (!statsSection) return;

    let hasAnimated = false;

    const runCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        counters.forEach((counter) => {
            const target = Number(counter.getAttribute('data-counter-target')) || 0;
            animateCounter(counter, target, 1200);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
}

function animateCounter(element, target, duration) {
    const startTime = performance.now();
    const startValue = 0;

    const tick = (currentTime) => {
        const elapsed = Math.min(currentTime - startTime, duration);
        const progress = elapsed / duration;
        const eased = 1 - (1 - progress) * (1 - progress);
        const value = Math.round(startValue + (target - startValue) * eased);

        element.textContent = String(value);

        if (elapsed < duration) {
            requestAnimationFrame(tick);
        } else {
            element.textContent = String(target);
        }
    };

    requestAnimationFrame(tick);
}

function initTypewriter() {
    const questionEl = document.getElementById('ia-user-question');
    const processingEl = document.getElementById('ia-processing');
    const answerEl = document.getElementById('ia-answer');
    const sourceEl = document.getElementById('ia-source');
    if (!questionEl || !processingEl || !answerEl || !sourceEl) return;

    const chatByLocale = {
        'pt-BR': {
            question: 'Quais compras acima de R$ 50 mil precisam de aprovação adicional este mês?',
            answerLines: [
                'Identifiquei 7 solicitações pendentes com valor acima de R$ 50 mil.',
                '3 estão sem anexos obrigatórios e 2 passaram do SLA de validação.',
                'Posso abrir a lista por centro de custo e responsável agora.'
            ],
            source: 'Fonte: /docs/politica-compras.pdf'
        },
        en: {
            question: 'Which purchases above R$50k require additional approval this month?',
            answerLines: [
                'I found 7 pending requests above R$50k.',
                '3 are missing required attachments and 2 exceeded the validation SLA.',
                'I can open the list by cost center and owner now.'
            ],
            source: 'Source: /docs/purchase-policy.pdf'
        },
        fr: {
            question: 'Quels achats supérieurs à 50 000 R$ nécessitent une approbation supplémentaire ce mois-ci ?',
            answerLines: [
                'J’ai identifié 7 demandes en attente au-dessus de 50 000 R$.',
                '3 n’ont pas les pièces obligatoires et 2 ont dépassé le SLA de validation.',
                'Je peux ouvrir la liste par centre de coûts et responsable maintenant.'
            ],
            source: 'Source : /docs/politique-achats.pdf'
        },
        ja: {
            question: '今月、R$50,000を超える購買で追加承認が必要なものはどれですか？',
            answerLines: [
                'R$50,000を超える保留中の申請が7件あります。',
                '3件は必須添付が不足し、2件は検証SLAを超過しています。',
                'コストセンターと担当者別の一覧を今すぐ開けます。'
            ],
            source: '出典: /docs/purchase-policy.pdf'
        },
        'zh-CN': {
            question: '本月哪些超过 R$50,000 的采购需要额外审批？',
            answerLines: [
                '我识别到 7 条超过 R$50,000 的待处理申请。',
                '其中 3 条缺少必需附件，2 条已超过审批 SLA。',
                '我现在可以按成本中心和负责人展开列表。'
            ],
            source: '来源：/docs/purchase-policy.pdf'
        }
    };

    let animationId = null;

    const resolveLocale = () => {
        const stored = localStorage.getItem('impulsotech_locale');
        if (stored && chatByLocale[stored]) return stored;
        const lang = (document.documentElement.lang || 'pt-BR');
        return chatByLocale[lang] ? lang : 'pt-BR';
    };

    const startAnimation = (locale) => {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        const scenario = chatByLocale[locale] || chatByLocale['pt-BR'];
        questionEl.textContent = '';
        answerEl.innerHTML = '';
        sourceEl.style.display = 'none';
        sourceEl.textContent = scenario.source;
        processingEl.classList.remove('is-visible');

        let stage = 'typingQuestion';
        let lastTime = performance.now();
        let accumulator = 0;
        let questionIndex = 0;
        let lineIndex = 0;
        let lineCharIndex = 0;
        let processingElapsed = 0;
        let currentAnswerLine = null;

        const frame = (now) => {
            const delta = now - lastTime;
            lastTime = now;
            accumulator += delta;

            if (stage === 'typingQuestion') {
                const speed = 34;
                while (accumulator >= speed && questionIndex < scenario.question.length) {
                    accumulator -= speed;
                    questionEl.textContent += scenario.question.charAt(questionIndex);
                    questionIndex += 1;
                }
                if (questionIndex >= scenario.question.length) {
                    stage = 'processing';
                    accumulator = 0;
                    processingElapsed = 0;
                    processingEl.classList.add('is-visible');
                }
            } else if (stage === 'processing') {
                processingElapsed += delta;
                if (processingElapsed >= 300) {
                    stage = 'typingAnswer';
                    accumulator = 0;
                    processingEl.classList.remove('is-visible');
                    currentAnswerLine = document.createElement('p');
                    currentAnswerLine.className = 'ia-terminal-line';
                    currentAnswerLine.textContent = '';
                    answerEl.appendChild(currentAnswerLine);
                }
            } else if (stage === 'typingAnswer') {
                const speed = 26;
                while (accumulator >= speed && lineIndex < scenario.answerLines.length) {
                    accumulator -= speed;
                    const currentLineText = scenario.answerLines[lineIndex];

                    if (lineCharIndex < currentLineText.length) {
                        currentAnswerLine.textContent += currentLineText.charAt(lineCharIndex);
                        lineCharIndex += 1;
                    } else {
                        lineIndex += 1;
                        lineCharIndex = 0;
                        if (lineIndex < scenario.answerLines.length) {
                            currentAnswerLine = document.createElement('p');
                            currentAnswerLine.className = 'ia-terminal-line';
                            currentAnswerLine.textContent = '';
                            answerEl.appendChild(currentAnswerLine);
                        } else {
                            stage = 'complete';
                            sourceEl.style.display = 'block';
                            break;
                        }
                    }
                }
            }

            if (stage !== 'complete') {
                animationId = requestAnimationFrame(frame);
            }
        };

        animationId = requestAnimationFrame(frame);
    };

    startAnimation(resolveLocale());
    window.addEventListener('impulso:locale-changed', (event) => {
        const locale = event?.detail?.locale || resolveLocale();
        startAnimation(locale);
    });
}

function initHeaderBlur() {
    const header = document.querySelector('.header');
    if (!header) return;

    const updateHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add('ia-header-scrolled');
        } else {
            header.classList.remove('ia-header-scrolled');
        }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
}
