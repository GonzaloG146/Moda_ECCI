 window.onload = function () {

    const selector = document.getElementById("lang-select");

    selector.addEventListener("change", function () {

        const elements = document.querySelectorAll("[data-en]");

        elements.forEach(el => {

            if (!el.dataset.original) {
                el.dataset.original = el.innerText.trim();
            }

            if (selector.value === "en") {
                el.innerText = el.dataset.en;
            } else {
                el.innerText = el.dataset.original;
            }

        });

    });

};

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans:  ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                lienzo:    '#FDFBF7',
                beigeBase: '#F5F2EB',
                terracota: {
                    50:  '#FFF7ED',
                    100: '#FFEDD5',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                },
                musgo: {
                    100: '#F0FDF4',
                    700: '#4D7C0F',
                    950: '#1A2E05',
                }
            }
        }
    }
};


document.addEventListener('DOMContentLoaded', function () {

    var isEN = false;

    /* Guardar texto español original */
    document.querySelectorAll('[data-en]').forEach(function (el) {
        if (!el.dataset.es) el.dataset.es = el.innerText.trim();
    });

    function traducir() {
        document.querySelectorAll('[data-en]').forEach(function (el) {
            el.innerText = isEN ? el.dataset.en : el.dataset.es;
        });
        var label = isEN ? 'EN / ES' : 'ES / EN';
        var b1 = document.getElementById('lang-toggle');
        var b2 = document.getElementById('lang-toggle-mobile');
        if (b1) b1.innerText = label;
        if (b2) b2.innerText = label;
    }

    function toggle() { isEN = !isEN; traducir(); }

    var b1 = document.getElementById('lang-toggle');
    var b2 = document.getElementById('lang-toggle-mobile');
    if (b1) b1.addEventListener('click', toggle);
    if (b2) b2.addEventListener('click', toggle);

    /* ── Menú móvil offcanvas ── */
    var offcanvasEl = document.getElementById('menuMobile');
    if (offcanvasEl && typeof bootstrap !== 'undefined') {
        var bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

        document.querySelectorAll('#offcanvas-nav a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                bsOffcanvas.hide();
                offcanvasEl.addEventListener('hidden.bs.offcanvas', function handler() {
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                    offcanvasEl.removeEventListener('hidden.bs.offcanvas', handler);
                });
            });
        });
    }
});
