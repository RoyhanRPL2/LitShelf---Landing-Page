document.addEventListener('DOMContentLoaded', function() {
    const bottomNav = document.querySelector('.bottom-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('#footer');

    window.addEventListener('scroll', function() {
        const topNavHeight = document.querySelector('#top-nav').offsetHeight;
        if (window.scrollY > topNavHeight) {
            bottomNav.classList.add('show');
        } else {
            bottomNav.classList.remove('show');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        const footerInView = footer.getBoundingClientRect().top < window.innerHeight; 
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                if (footerInView && sectionId !== 'footer') {
                    navLinks.forEach(link => {
                        link.style.borderColor = '#c2b38d';
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.borderColor = '#fff';
                        }
                    });
                } else if (!footerInView) {
                    navLinks.forEach(link => {
                        link.style.borderColor = '#c2b38d';
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.borderColor = '#fff';
                        }
                    });
                } else if (sectionId === 'footer') {
                    navLinks.forEach(link => link.style.borderColor = '#c2b38d');
                }
            }
        });
    }, {
        threshold: 0.5
    });

    
    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', function() {
        const footerInView = footer.getBoundingClientRect().top <= window.innerHeight;
        if (footerInView) {
            navLinks.forEach(link => {
                link.style.borderColor = '#c2b38d';
            });
        } else {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    navLinks.forEach(link => {
                        link.style.borderColor = '#c2b38d';
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.style.borderColor = '#fff';
                        }
                    });
                }
            });
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById("menu-active");
    const header = document.querySelector("header");
    const menuIcon = document.querySelector(".menu-icon img");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        header.style.height = "auto";
    } else {
        menu.style.display = "flex";
        header.style.height = "100vh";
    }
}

function menuLinkClicked() {
    const menu = document.getElementById("menu-active");
    const header = document.querySelector("header");
    menu.style.display = "none";
    header.style.height = "fit-content";
}


window.onload = function() {
    if (window.location.href.indexOf('#') > -1) {
        window.location.href = window.location.href.split('#')[0];
    }
};