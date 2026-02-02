console.log('%c🚀 ImpulsoTech', 'font-size: 48px; font-weight: bold; background: linear-gradient(135deg, #8B5CF6, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');

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
`, 'color: #8B5CF6; font-family: monospace;');

console.log('%c👀 Curioso, hein?', 'font-size: 18px; color: #22D3EE; font-weight: bold;');
console.log('%cSe você está aqui, provavelmente é dev... ou muito curioso!', 'font-size: 14px; color: #94A3B8;');

console.log('%c💼 Estamos contratando!', 'font-size: 16px; color: #10B981; font-weight: bold;');
console.log('%cManda um oi: contato@impulsotech.dev', 'font-size: 14px; color: #94A3B8;');

console.log('%c⚠️ Aviso:', 'font-size: 14px; color: #F59E0B; font-weight: bold;');
console.log('%cSe veio tentar copiar, relaxa... o código é bonito, mas a mágica está na execução. 😉', 'font-size: 12px; color: #94A3B8;');

console.log('%c🔧 Stack:', 'font-size: 14px; color: #8B5CF6; font-weight: bold;');
console.log('%cHTML + CSS + JS puro. Às vezes, menos é mais.', 'font-size: 12px; color: #94A3B8;');

console.log('%c───────────────────────────────', 'color: #374151;');

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.9)';
        }
        
        lastScroll = currentScroll;
    });
    
    const contactForm = document.getElementById('contact-form');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvSr5vYHexFYBC2qviZWWrFlhJJiQgar2UEc3ykROfFsNmpsSu8yNk912YR1azGa24Vg/exec';
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            const formData = new FormData(contactForm);
            const data = {
                nome: formData.get('name'),
                email: formData.get('email'),
                telefone: formData.get('whatsapp'),
                mensagem: formData.get('challenge')
            };
            
            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                submitBtn.textContent = 'Enviado com sucesso!';
                submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
            } catch (error) {
                submitBtn.textContent = 'Erro ao enviar';
                submitBtn.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.method-card, .service-card, .team-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    initCaseCarousel();
});

function initCaseCarousel() {
    const slides = document.querySelectorAll('.case-slide');
    const badge = document.getElementById('caseBadge');
    const dotsContainer = document.getElementById('caseDots');
    const prevBtn = document.getElementById('casePrev');
    const nextBtn = document.getElementById('caseNext');
    
    if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    let autoSlideInterval;
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('case-dot');
        if (i === 0) dot.classList.add('active');
        (function(index) {
            dot.onclick = function() { goToSlide(index); };
        })(i);
        dotsContainer.appendChild(dot);
    }
    
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            dotsContainer.children[i].classList.remove('active');
        }
        slides[index].classList.add('active');
        dotsContainer.children[index].classList.add('active');
        if (badge) badge.textContent = slides[index].getAttribute('data-title');
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
    
    prevBtn.onclick = function() { prevSlide(); resetAutoSlide(); };
    nextBtn.onclick = function() { nextSlide(); resetAutoSlide(); };
    
    autoSlideInterval = setInterval(nextSlide, 5000);
}
