// Fungsi untuk menampilkan atau menyembunyikan menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
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
});
