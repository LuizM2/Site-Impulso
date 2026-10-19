// Impulsotech v2: menu, entrada suave e contato pelo WhatsApp.
(function () {
  // Número que recebe os contatos do site. Trocar pelo número Comercial quando o chip estiver ativo.
  var WHATSAPP = '5521968189174';

  function waLink(texto) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto);
  }

  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.setAttribute('href', waLink(a.getAttribute('data-wa')));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  var ano = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = ano; });

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var aberto = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    header.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var itens = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    itens.forEach(function (el) { io.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('in'); });
  }

  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var campos = ['nome', 'empresa', 'whatsapp'];
      var faltando = campos.filter(function (n) { return !form.elements[n].value.trim(); });
      var hint = document.getElementById('form-hint');
      if (faltando.length) {
        form.elements[faltando[0]].focus();
        if (hint) hint.textContent = 'Preencha nome, empresa e WhatsApp para a gente responder.';
        return;
      }
      var v = function (n) { return form.elements[n].value.trim(); };
      var texto = 'Olá! Sou ' + v('nome') + ', da ' + v('empresa') + '.\n' +
        'Interesse: ' + v('oferta') + '.\n' +
        (v('mensagem') ? 'Onde a empresa trava: ' + v('mensagem') + '\n' : '') +
        'Meu WhatsApp: ' + v('whatsapp');
      window.open(waLink(texto), '_blank', 'noopener');
      if (hint) hint.textContent = 'Abrimos o WhatsApp com a sua mensagem. Se não abriu, chame no ' + '(21) 96818-9174' + '.';
    });
  }
})();
