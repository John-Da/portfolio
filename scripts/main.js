document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button functionality
const scrollToTopButton = document.createElement('div');
        scrollToTopButton.classList.add('scroll-to-top');
        scrollToTopButton.innerHTML = '&uarr;';
        document.body.insertBefore(scrollToTopButton, document.body.lastElementChild);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

// Form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name === "" || email === "" || message === "") {
        alert('Please fill out all fields.');
        return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending the form (since there's no backend yet)
    alert('Message sent successfully!');
    form.reset();  // Reset form after submission
});

// Header background animation (parallax effect)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Random floating animated background elements
const bgElements = document.querySelectorAll('.animated-bg span');
bgElements.forEach(span => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;
    const duration = Math.random() * 20 + 8;

    span.style.left = `${x}px`;
    span.style.animationDelay = `${delay}s`;
    span.style.animationDuration = `${duration}s`;
});

document.querySelectorAll('.skill-item').forEach(skill => {
    const percentage = skill.getAttribute('data-percentage');
    const progressRing = skill.querySelector('.progress-ring');

    progressRing.style.setProperty('--progress', percentage);
});

