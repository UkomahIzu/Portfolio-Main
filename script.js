/**
 * Finox Editorial Portfolio - JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Animated Stat Counters (+200, +50)
  // ==========================================
  const animateCounters = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      let count = 0;
      const duration = 1500; // ms
      const increment = Math.ceil(target / (duration / 16));

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        stat.textContent = `+${count}`;
      }, 16);
    });
  };

  // Trigger stat counter animation after brief delay
  setTimeout(animateCounters, 200);


  // ==========================================
  // 2. Drag & Drop Helper for Empty Right Photo Area
  // ==========================================
  const heroRight = document.querySelector('.hero-right');

  if (heroRight) {
    ['dragenter', 'dragover'].forEach(eventName => {
      heroRight.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        heroRight.classList.add('drag-over');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      heroRight.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        heroRight.classList.remove('drag-over');
      }, false);
    });

    heroRight.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0 && files[0].type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          heroRight.innerHTML = `<img src="${event.target.result}" alt="User Portrait" class="user-portrait-img">`;
        };
        reader.readAsDataURL(files[0]);
      }
    });
  }


  // ==========================================
  // 3. "Book A Call" Modal Controller
  // ==========================================
  const btnBookCall = document.getElementById('btn-book-call');
  const modalBookCall = document.getElementById('modal-book-call');
  const modalClose = document.getElementById('modal-close');

  const openModal = () => {
    modalBookCall.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = () => {
    modalBookCall.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (btnBookCall) {
    btnBookCall.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal on backdrop click
  if (modalBookCall) {
    modalBookCall.addEventListener('click', (e) => {
      if (e.target === modalBookCall) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBookCall.classList.contains('hidden')) {
      closeModal();
    }
  });


  // ==========================================
  // 4. Nav Links Active State Toggle
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

});
