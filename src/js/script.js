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
      
      // Fungsi untuk menutup dropdown dan animasi ikon
      const closeDropdown = () => {
        dropdownMenu.classList.add('hide-dropdown'); // Tambahkan animasi slide-up
        dropdownMenu.classList.remove('show'); // Hapus kelas show agar dropdown tersembunyi
  
        // Menunggu animasi selesai, baru sembunyikan dropdown
        setTimeout(() => {
          dropdownMenu.classList.add('hidden'); // Sembunyikan dropdown
          dropdownMenu.classList.remove('hide-dropdown');
        }, 300); // Durasi animasi (0.3 detik)
  
        // Animasi putaran ikon
        icon.classList.add('spin-left');
        setTimeout(() => icon.classList.remove('spin-left'), 300); // Hapus kelas setelah animasi selesai
      };
  
      // Fungsi untuk membuka dropdown dan animasi ikon
      const openDropdown = () => {
        dropdownMenu.classList.remove('hidden'); // Pastikan dropdown terlihat
        setTimeout(() => {
          dropdownMenu.classList.add('show'); // Menampilkan dropdown dengan animasi slide-down
        }, 10); // Sedikit delay agar animasi diterapkan
  
        // Animasi putaran ikon
        icon.classList.add('spin-right');
        setTimeout(() => icon.classList.remove('spin-right'), 300); // Hapus kelas setelah animasi selesai
      };
  
      // Event listener untuk toggle dropdown saat tombol diklik
      dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();
  
        // Cek apakah dropdown sedang terbuka atau tidak
        const isMenuVisible = dropdownMenu.classList.contains('show');
  
        if (isMenuVisible) {
          closeDropdown(); // Menutup dropdown jika sudah terbuka
        } else {
          openDropdown(); // Membuka dropdown jika belum terbuka
        }
      });
  
      // Tutup dropdown saat klik di luar dropdown atau tombol
      document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
          if (dropdownMenu.classList.contains('show')) {
            closeDropdown(); // Menutup dropdown jika klik di luar
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