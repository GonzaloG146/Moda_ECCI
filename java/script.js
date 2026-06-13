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
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        lienzo: '#FDFBF7',
                        beigeBase: '#F5F2EB',
                        terracota: {
                            50: '#FFF7ED',
                            700: '#C2410C',
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
        }
    
document.getElementById('lang-toggle').addEventListener('click', function() {
    document.querySelectorAll('[data-en]').forEach(el => {
        let temp = el.innerText;
        el.innerText = el.getAttribute('data-en');
        el.setAttribute('data-en', temp);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var offcanvasEl = document.getElementById('menuMobile');
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

   
    var langMain   = document.getElementById('lang-toggle');
    var langMobile = document.getElementById('lang-toggle-mobile');
    if (langMobile && langMain) {
        langMobile.addEventListener('click', function () {
            langMain.click();
        });
    }
});
