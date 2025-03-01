document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Apply SplitType to .home-text (if SplitType is loaded)
    if (typeof SplitType !== "undefined") {
        let typeSplit = new SplitType(".home-text", {
            types: "words",
            tagName: "span"
        });

        // Create GSAP Timeline for Home Text Animation (Only on page load)
        let tl = gsap.timeline();

        tl.from(".home-text .word", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power4.out",
            stagger: { amount: 0.8 }
        });
    } else {
        console.warn("SplitType is not loaded. Text animation will not work.");
    }

    // Navbar Scroll Effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // About Section Animation (Scroll-triggered)
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });

    const cards = gsap.utils.toArray(".card");

    // Create a timeline for staggered animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".grid",
            start: "top 90%",
            end: "top 90%",
            toggleActions: "play none reverse none",
        },
    });

    // Add staggered animations to the timeline
    tl.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2, // Staggered delay between each card
    });

    // GSAP Animation for "Get in Touch" Section
    gsap.from("#contact-us", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact-us",
            start: "top 80%",
            toggleActions: "play none none none", // Play animation once
        },  
    });

    const swiper = new Swiper('.slider-wrapper', {
        loop: true, // Enable infinite loop
        freeMode: false,
        slidesPerView: 1,
        centeredSlides: true,
        grabCursor: true,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true, // Wait for transition to complete before moving to the next slide
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }
        }
    });

    gsap.from("#mirror-image", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
    });

    gsap.from(".home-btn", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
    });
    gsap.set(".home-btn", { opacity: 1 }); // Ensure it's visible before animation

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    // Show the button when the user scrolls down 200px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Back to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const navButton = document.querySelector('.nav-btn');
    const overlay = document.getElementById('overlay');

    navButton.addEventListener('click', () => {
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    });

    gsap.from(".form-container", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
            trigger: ".form-container",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });

    gsap.from(".slider-wrapper", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: ".slider-wrapper",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });
});