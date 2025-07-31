document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light-mode';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
});