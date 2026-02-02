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
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            const whatsappNumber = '5521968189174';
            const message = `Olá! Vim pelo site ImpulsoTech.%0A%0A*Nome:* ${data.name}%0A*Email:* ${data.email}%0A*WhatsApp:* ${data.whatsapp}%0A*Desafio:* ${data.challenge}`;
            
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            
            contactForm.reset();
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
    
    const slides = document.querySelectorAll('.case-slide');
    const badge = document.getElementById('caseBadge');
    const dotsContainer = document.getElementById('caseDots');
    const prevBtn = document.getElementById('casePrev');
    const nextBtn = document.getElementById('caseNext');
    let currentSlide = 0;
    let autoSlideInterval;
    
    if (slides.length > 0 && dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('case-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        function updateSlide() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                dotsContainer.children[index].classList.remove('active');
            });
            slides[currentSlide].classList.add('active');
            dotsContainer.children[currentSlide].classList.add('active');
            badge.textContent = slides[currentSlide].dataset.title;
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlide();
            resetAutoSlide();
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide();
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
        nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
        
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
});
