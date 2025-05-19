        const buttons = document.querySelectorAll('.category-btn');
        const cards = document.querySelectorAll('.service-card');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                cards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category');

                    if (category === 'all' || cardCategories.includes(category)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Scroll to top
        const scrollTop = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        });

        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Manejo del formulario de cotización con Formspree
const form = document.getElementById('quotationForm');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const action = form.getAttribute('action');

  const response = await fetch(action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerHTML = "✅ ¡Tu solicitud fue enviada con éxito!";
    form.reset();
  } else {
    status.innerHTML = "❌ Hubo un problema. Intenta nuevamente.";
  }
});

// Autocompletar tipo de servicio al hacer clic en "Cotizar"
const serviceLinks = document.querySelectorAll('.select-service');
const serviceSelect = document.getElementById('service');

serviceLinks.forEach(link => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    if (serviceSelect) {
      serviceSelect.value = service;
    }
  });
});

const navLinksItems = document.querySelectorAll('.nav-links a');
const navLinksMenu = document.getElementById('navLinks');

navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinksMenu.classList.remove('active');
  });
});