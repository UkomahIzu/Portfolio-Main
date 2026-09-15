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
  // 3. "Under Reconstruction" Auto Modal Controller
  // ==========================================
  const modalReconstruction = document.getElementById('modal-reconstruction');
  const btnDismissReconstruction = document.getElementById('btn-dismiss-reconstruction');

  if (modalReconstruction) {
    // Show automatically on site load
    modalReconstruction.classList.remove('hidden');

    const closeReconstructionModal = () => {
      modalReconstruction.classList.add('hidden');
    };

    if (btnDismissReconstruction) {
      btnDismissReconstruction.addEventListener('click', closeReconstructionModal);
    }

    modalReconstruction.addEventListener('click', (e) => {
      if (e.target === modalReconstruction) {
        closeReconstructionModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalReconstruction.classList.contains('hidden')) {
        closeReconstructionModal();
      }
    });
  }


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


  // ==========================================
  // 5. Mobile Hamburger Navigation Menu Toggle
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navCenter = document.getElementById('nav-center');

  if (mobileToggle && navCenter) {
    const toggleMobileMenu = () => {
      const isOpen = navCenter.classList.toggle('is-open');
      mobileToggle.classList.toggle('is-active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    };

    const closeMobileMenu = () => {
      navCenter.classList.remove('is-open');
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navCenter.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

});
