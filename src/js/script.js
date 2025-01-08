// Fungsi untuk menampilkan atau menyembunyikan menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

// Fungsi untuk menampilkan dan menyembunyikan floating wa
document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const icon = dropdownButton.querySelector('i'); // Ambil elemen ikon di dalam tombol

  if (dropdownButton && dropdownMenu && icon) {
    const closeDropdown = () => {
      dropdownMenu.classList.remove('show'); // Hapus kelas show
      dropdownMenu.classList.add('hide-dropdown'); // Tambahkan animasi keluar (slide down)
      setTimeout(() => dropdownMenu.classList.remove('hide-dropdown'), 500); // Hapus animasi selesai

      icon.classList.add('spin-left');
      setTimeout(() => icon.classList.remove('spin-left'), 500); // Hapus animasi ikon selesai
    };

    const openDropdown = () => {
      dropdownMenu.classList.add('show'); // Tambahkan kelas show
      dropdownMenu.classList.add('show-dropdown'); // Tambahkan animasi masuk (slide up)
      setTimeout(() => dropdownMenu.classList.remove('show-dropdown'), 500); // Hapus animasi selesai

      icon.classList.add('spin-right');
      setTimeout(() => icon.classList.remove('spin-right'), 500); // Hapus animasi ikon selesai
    };

    dropdownButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Hindari klik keluar langsung menutup
      const isMenuVisible = dropdownMenu.classList.contains('show');
      if (isMenuVisible) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    document.addEventListener('click', (event) => {
      if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
        if (dropdownMenu.classList.contains('show')) {
          closeDropdown();
        }
      }
    });
  } else {
    console.error('Dropdown button or menu not found!');
  }
});









//fungsi untuk navbar scroll 
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY; // Posisi scroll terakhir
  let isNavbarVisible = true; // Status apakah navbar terlihat

  // Event listener untuk scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Jika scroll ke bawah dan sudah lebih dari 100px
      navbar.style.transform = 'translateY(-100%)';
      isNavbarVisible = false;
    } else if (currentScrollY <= lastScrollY || currentScrollY <= 100) {
      // Jika scroll ke atas atau posisi scroll di bawah 100px
      navbar.style.transform = 'translateY(0)';
      isNavbarVisible = true;
    }

    lastScrollY = currentScrollY;
  });

  // Event listener untuk kursor
  document.addEventListener('mousemove', (event) => {
    if (!isNavbarVisible && event.clientY <= 100) {
      // Jika kursor mendekati bagian atas layar (<= 100px dari atas)
      navbar.style.transform = 'translateY(0)';
      isNavbarVisible = true;
    }
  });

  //fungsi animasi scroll link
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default behavior
      const targetId = link.getAttribute('href').substring(1); // Get the target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Enable smooth scrolling
          block: 'start', // Align to the top of the target
        });
      }
    });
  });
});