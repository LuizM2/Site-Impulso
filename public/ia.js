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

    const question = 'Quais compras acima de R$ 50 mil precisam de aprovação adicional este mês?';
    const answerLines = [
        'Identifiquei 7 solicitações pendentes com valor acima de R$ 50 mil.',
        '3 estão sem anexos obrigatórios e 2 passaram do SLA de validação.',
        'Posso abrir a lista por centro de custo e responsável agora.'
    ];

    let stage = 'typingQuestion';
    let lastTime = performance.now();
    let accumulator = 0;
    let questionIndex = 0;
    let lineIndex = 0;
    let lineCharIndex = 0;
    let processingElapsed = 0;
    let currentAnswerLine = null;

    sourceEl.style.display = 'none';

    const frame = (now) => {
        const delta = now - lastTime;
        lastTime = now;
        accumulator += delta;

        if (stage === 'typingQuestion') {
            const speed = 34;
            while (accumulator >= speed && questionIndex < question.length) {
                accumulator -= speed;
                questionEl.textContent += question.charAt(questionIndex);
                questionIndex += 1;
            }
            if (questionIndex >= question.length) {
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
            while (accumulator >= speed && lineIndex < answerLines.length) {
                accumulator -= speed;
                const currentLineText = answerLines[lineIndex];

                if (lineCharIndex < currentLineText.length) {
                    currentAnswerLine.textContent += currentLineText.charAt(lineCharIndex);
                    lineCharIndex += 1;
                } else {
                    lineIndex += 1;
                    lineCharIndex = 0;
                    if (lineIndex < answerLines.length) {
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
            requestAnimationFrame(frame);
        }
    };

    requestAnimationFrame(frame);
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
